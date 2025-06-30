'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { BarChart2, Blocks, BlocksIcon, LayoutDashboard, LayoutDashboardIcon, List, ListCollapse, ListCollapseIcon, Package, Receipt } from 'lucide-react'
import Image from 'next/image';
import Logo from '@/public/logo.svg'

export default function Layout({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className='flex h-screen overflow-hidden'>
            <aside className={`bg-white text-gray-800 border-r border-gray-300 shadow transition-all duration-300 ease-in-out ${isOpen ? 'w-52' : 'w-18'} flex flex-col justify-between items-center py-6`}>
                <div>
                    <div className="px-4 pb-4 font-bold text-lg text-center">
                        {isOpen ? <Link href='/products'><Image src={Logo} alt='logo' /></Link> : 'POS 🛒'}
                    </div>
                    <nav className='flex flex-col px-4 space-y-2'>
                        <Link href='/products' className='hover:bg-[#E28E34] hover:text-white hover:transition-all rounded p-2'>
                            {
                                isOpen ? <div className='flex align-center gap-3'><Package />Products</div> : <Package />
                            }
                        </Link>
                        <Link href='/orders' className='hover:bg-[#E28E34] hover:text-white hover:transition-all rounded p-2'>
                            {
                                isOpen ? <div className='flex align-center gap-3'><Receipt />Orders</div> : <Receipt />
                            }
                        </Link>
                        <Link href='/sales' className='hover:bg-[#E28E34] hover:text-white hover:transition-all rounded p-2'>
                            {
                                isOpen ? <div className='flex align-center gap-3'><BarChart2 />Sales Report</div> : <BarChart2 />
                            }
                        </Link>
                    </nav>
                </div>
                <button className='cursor-pointer' onClick={() => setIsOpen(prev => !prev)}><ListCollapseIcon /></button>
            </aside>
            <main className='flex-1 overflow-y-auto p-4 bg-gray-300'>
                {children}
            </main>
        </div>
    )
}
