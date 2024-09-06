import prisma from "./prisma";


export async function createUser(email: string, username: string, password: string) {
    const user = await prisma.user.create({
        data: {
            email: email,
            username: username,
            password: password,
        },
    });
    return user.id;
}


export async function getUserByEmail(email: string) {
    return prisma.user.findFirst({
        where: {email: email},
    });
}