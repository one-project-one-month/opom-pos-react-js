"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ReactNode } from "react";

interface NavLinkProps {
    href: string;
    children: ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={clsx(
                "hover:transition-all rounded p-2",
                isActive ? "bg-[#E28E34] text-white" : "bg-white",
            )}
        >
            {children}
        </Link>
    );
}
