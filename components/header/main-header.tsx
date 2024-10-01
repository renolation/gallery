"use client";

import classes from "./main-header.module.css";

import Link from "next/link";
import NavLink from "./nav-link";
import { usePathname } from 'next/navigation';



export default function MainHeader() {

    const pathname = usePathname();

    const isImageDetailRoute = pathname.startsWith('/images/');
    const isPostDetailRoute = pathname.startsWith('/posts/');
    // if (isImageDetailRoute || isPostDetailRoute) {
    //     return null;
    // }

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
                    </li>
                    <li>
                        <NavLink href={'/posts/14c1b7d2-3ddd-4d49-9886-a98030cd0db0'}>Detail</NavLink>
                    </li>
                    <li>
                        <NavLink href={'/images/5496a65a-c744-4c55-b1c5-4f2cccd5a048'}>Image Detail</NavLink>
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