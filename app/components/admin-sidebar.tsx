"use client"
import { BarChart, DollarSign, Home, List, ListCollapseIcon, Settings, User } from 'lucide-react';
import { useState } from 'react';
import NavLink from './navlink';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <aside className={`bg-white text-gray-800 border-r border-gray-300 shadow transition-all duration-300 ease-in-out ${isOpen ? 'w-52' : 'w-18'} flex flex-col justify-between items-center py-6`}>
            <nav className='flex flex-col px-4 space-y-2'>
                <NavLink href='/admin'>
                    {
                        isOpen ? <div className='flex align-center gap-3'><Home />Dashboard</div> : <Home />
                    }
                </NavLink>
                <NavLink href='/admin/sale-reports'>
                    {
                        isOpen ? <div className='flex align-center gap-3'><BarChart />Sale Reports</div> : <BarChart />
                    }
                </NavLink>
                <NavLink href='/admin/inventory'>
                    {
                        isOpen ? <div className='flex align-center gap-3'><List />Inventory Items</div> : <List />
                    }
                </NavLink>
                <NavLink href='/admin/discount-items'>
                    {
                        isOpen ? <div className='flex align-center gap-3'><DollarSign />Discount Items</div> : <DollarSign />
                    }
                </NavLink>
                <NavLink href='/admin/admin-lists'>
                    {
                        isOpen ? <div className='flex align-center gap-3'><User />Admin Lists</div> : <User />
                    }
                </NavLink>
                <NavLink href='/admin/settings'>
                    {
                        isOpen ? <div className='flex align-center gap-3'><Settings />Settings</div> : <Settings />
                    }
                </NavLink>
            </nav>
            <button className='cursor-pointer' onClick={() => setIsOpen(prev => !prev)}><ListCollapseIcon /></button>
        </aside>
    )
}
