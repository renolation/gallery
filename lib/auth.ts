import {Lucia} from 'lucia';
import {cookies} from "next/headers";
import {PrismaAdapter} from "@lucia-auth/adapter-prisma";
import prisma from "@/lib/prisma/prisma";


const adapter = new PrismaAdapter(prisma.session, prisma.user);
export const lucia = new Lucia(adapter, {
    sessionCookie: {
        attributes: {
            secure: (process.env as NodeJS.ProcessEnv).NODE_ENV === "production"
        }
    }
});

declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
		UserId: number;
	}
}


export async function createAuthSession(userId: number) {
    console.log('createAuthSession: ', userId);

    const session = await lucia.createSession(userId, {});

    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    );
}

export async function verifyAuth() {
    const sessionCookie = cookies().get(lucia.sessionCookieName);
    if (!sessionCookie) {
        return {
            user: null,
            session: null,
        };
    }
    const sessionId = sessionCookie.value;
    if (!sessionId) {
        return {
            user: null,
            session: null,
        };
    }
    const result = lucia.validateSession(sessionId);

    try {
        const session = (await result).session;
        if (session && session.fresh) {
            const sessionCookie = lucia.createSessionCookie(session.id);
            cookies().set(
                sessionCookie.name,
                sessionCookie.value,
                sessionCookie.attributes
            );
        }
        if (!session) {
            const sessionCookie = lucia.createBlankSessionCookie();
            cookies().set(
                sessionCookie.name,
                sessionCookie.value,
                sessionCookie.attributes
            );
        }
    } catch (e) {
        // Handle error
    }

    return result;
}

export async function destroySession() {
    const {session} = await verifyAuth();
    if (!session) {
        return {
            error: 'Unauthorized'
        };
    }
    await lucia.invalidateSession(session.id);
    const sessionCookie = lucia.createBlankSessionCookie();
    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    );
}

export async function getUserIdFromSession() {
    const sessionCookie = cookies().get(lucia.sessionCookieName);
    if (!sessionCookie) {
        return null;
    }

    const sessionId = sessionCookie.value;
    if (!sessionId) {
        return null;
    }

    try {
        const {session} = await lucia.validateSession(sessionId);
        return session?.userId || null;
    } catch (e) {
        // Handle error
        return null;
    }
}

