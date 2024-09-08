

import classes from "./main-header.module.css";

import Link from "next/link";
import NavLink from "./nav-link";


export default function MainHeader() {
    return (
        <header className={classes.header}>
            <Link href={'/'}><h1>Next Meals</h1></Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href={'/posts'}>Posts</NavLink>
                    </li>
                    <li>
                        <NavLink href={'/images'}>Images</NavLink>
                    </li>
                    <li>
                        <NavLink href={'/auth?mode=login'}>Login</NavLink>
                    </li>
                    <li>
                        <NavLink href={'/posts/create'}>Create</NavLink>
                    </li> <li>
                        <NavLink href={'/posts/2518483c-54de-4d3b-a3c0-c2f1f00e2e4b'}>Detail</NavLink>
                    </li>
                    {/*<li>*/}
                    {/*    <a href="/api/auth/login">Login Auth0</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <a href="/api/auth/logout">Logout</a>*/}
                    {/*</li>*/}
                </ul>
            </nav>
        </header>
    );
}