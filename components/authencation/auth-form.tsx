'use client';


import {useFormState} from "react-dom";
import {auth} from "@/action/auth-action";
import Link from "next/link";

const initialState = {
    message: '',
}

export default function AuthForm({mode}: { mode: string }) {

const [state, formAction] = useFormState((prevState: any, formData: FormData) => auth(mode, prevState, formData), initialState);
return (
    <form id="auth-form" action={formAction}>
        <div>
            <img src="/images/auth-icon.jpg" alt="A lock icon"/>
        </div>
        <p>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email"/>
        </p>
        <p>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"/>
        </p>

        <p>
            <button type="submit">
                {mode === 'login' ? 'Log in' : 'Create account'}
            </button>
        </p>
        <p>
            {mode === 'login' && (<Link href="/auth?mode=signup">Create an account.</Link>)}
            {mode === 'signup' && (<Link href="/auth?mode=login">Login with existing account.</Link>)}
        </p>
    </form>
);


}
