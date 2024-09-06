const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Create permissions
  const guestPermission = await prisma.permission.create({
    data: { name: 'view' },
  });

  const memberPermission = await prisma.permission.create({
    data: { name: 'upload' },
  });

  const vipPermission = await prisma.permission.create({
    data: { name: 'like' },
  });

  const adminPermission = await prisma.permission.create({
    data: { name: 'approve' },
  });

  // Create roles with hierarchy
  const guestRole = await prisma.role.create({
    data: {
      name: 'guest',
      permissions: { connect: [{ id: guestPermission.id }] },
    },
  });

  const memberRole = await prisma.role.create({
    data: {
      name: 'member',
      permissions: { connect: [{ id: memberPermission.id }, { id: guestPermission.id }] },
      parent: { connect: { id: guestRole.id } },
    },
  });

  const vipRole = await prisma.role.create({
    data: {
      name: 'vip',
      permissions: { connect: [{ id: vipPermission.id }, { id: memberPermission.id }, { id: guestPermission.id }] },
      parent: { connect: { id: memberRole.id } },
    },
  });

  const adminRole = await prisma.role.create({
    data: {
      name: 'admin',
      permissions: { connect: [{ id: adminPermission.id }, { id: vipPermission.id }, { id: memberPermission.id }, { id: guestPermission.id }] },
      parent: { connect: { id: vipRole.id } },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });