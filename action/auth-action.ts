'use server';

import {hashUserPassword, verifyPassword} from "@/lib/hash";
import {createUser, getUserByEmail} from "@/lib/prisma/prisma-auth";
import {createAuthSession, destroySession} from "@/lib/auth";
import {redirect} from "next/navigation";

import {z} from 'zod'

const schema = z.object({
    email: z.string({
        invalid_type_error: 'Invalid Email',
    }),
    password: z.string().min(8, {
        message: 'Password must be at least 8 characters long',
    }),
})

export async function signup(prevState: any, formData: FormData) {

    const email = formData.get('email') as string;
    let username = formData.get('username') as string;
    if (!username) {
        username = email.split('@')[0];
    }
    const password = formData.get('password') as string;


    const validatedFields = schema.safeParse({
        email: email,
        username: username,
        password: password,
    })

    console.log(validatedFields);

    // Return early if the form data is invalid
    if (!validatedFields.success) {
        console.log(validatedFields.error.flatten().fieldErrors);
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const hashedPassword = hashUserPassword(password);
    try {
        const id = await createUser(email, username, hashedPassword);
        await createAuthSession(id)
        redirect('/posts');
    } catch (error: unknown) {
        if (error instanceof Error && 'code' in error && error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
            return {message: 'Email already exists'}
        }
        throw error;
    }
}


export async function login(prevState: any, formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const existingUser = await getUserByEmail(email);

    if (!existingUser) {
        return {
            errors: {
                email: 'can not auth user'
            }
        }
    }

    const isValidPassword = verifyPassword(existingUser.password, password);
    if (!isValidPassword) {
        return {
            errors: {
                password: 'wrong password'
            }
        }
    }
    await createAuthSession(existingUser.id)
    redirect('/posts');
}


export async function auth(mode: string, prevState: any, formData: FormData) {
    if (mode === 'login') {
        return login(prevState, formData);
    } else {
        return signup(prevState, formData);
    }
}

export async function logout() {
    await destroySession();
    redirect('/');
}