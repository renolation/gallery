'use client';

import {usePathname} from "next/navigation";
import Link from 'next/link';
import classes from "./nav-link.module.css";

export default function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
    const path = usePathname();
    return (
        <Link href={href} className={path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}>
            {children}
        </Link>
    );
}