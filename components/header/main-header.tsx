

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
                        <NavLink href={'/gallery'}>Gallery</NavLink>
                    </li>
                    <li>
                        <NavLink href={'/auth?mode=login'}>Login</NavLink>
                    </li>
                    <li>
                        <a href="/api/auth/login">Login Auth0</a>
                    </li>
                    <li>
                        <a href="/api/auth/logout">Logout</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}