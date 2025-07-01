import React, { ButtonHTMLAttributes, ReactNode } from 'react'

type CustomProps = {
    className?: string;
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function CustomBtn({ className = '', children, ...rest }: CustomProps) {
    return (
        <button className={`${className} text-white rounded-sm sm:px-2.5 px-2 sm:py-2 py-1 cursor-pointer`} {...rest}>
            {children}
        </button>
    )
}