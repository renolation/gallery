import prisma from "./prisma";


export async function createUser(email: string, username: string, password: string) {

    const role = await prisma.role.findFirst({
        where: {name: 'member'},
    });

    if (!role) {
        throw new Error("Role 'member' not found");
    }

    const user = await prisma.user.create({
        data: {
            email: email,
            username: username,
            password: password,
            role: {connect: {id: role.id}},
        },
    });
    return user.id;
}


export async function getUserByEmail(email: string) {
    return prisma.user.findFirst({
        where: {email: email},
    });
}