'use client'
import Logo from '@/public/logo.svg';
import { format } from 'date-fns';
import { CalendarDays, LogOut } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import CustomBtn from '../components/custom-btn';

export default function Header() {
    const now = new Date();
    const formattedDate = format(now, 'EEEE d, MMMM h:mma')

    return (
        <header className='border-b border-gray-300 bg-white z-50 md:px-10 px-5 flex justify-between items-center fixed w-full h-[80px]'>
            <Link href='/products'><Image src={Logo} alt='logo' className='lg:w-[200] w-[150] h-auto' /></Link>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 lg:gap-16 items-center justify-center">
                <div className='md:flex hidden gap-2'>
                    <CalendarDays />
                    <span className='font-medium'>{formattedDate}</span>
                </div>
                <Link href={'/order-history'}>
                    <span className='md:text-lg font-medium underline cursor-pointer text-primary-300 hover:text-primary-500 hover:transition-colors'>View Order History</span>
                </Link>
                <CustomBtn className='bg-alert-500 flex gap-3 items-center'><LogOut size={18} /> Log Out</CustomBtn>
            </div>
        </header>
    )
}
