"use client";
import CustomBtn from '@/app/components/custom-btn';
import DateFilter from '@/app/components/date-filter';
import ProductSearch from '@/app/components/product-search'
import  { useState } from 'react'


function OrderHistory() {
    const [value, setValue] = useState('1');
  return (
    
        <div className='max-w-[1280px] mx-auto '>
            <div className="flex justify-between items-center gap-5 mb-4">
                <div className='w-full flex items-center gap-3'>
                    <ProductSearch/>
                    <CustomBtn className='bg-[#FB9E3A] text-white'>Search</CustomBtn>
                </div>
                <div className='flex items-center justify-center gap-10'>
                    
                    <DateFilter/>
                </div>
            </div>
            
            <div className="overflow-x-auto mt-16">
                <table className="min-w-full divide-y-2 divide-gray-200">
                        <thead className="ltr:text-left rtl:text-right">
                        <tr className="*:font-medium *:text-gray-900">
                            <th className="px-3 py-1 whitespace-nowrap">
                                <input type="checkbox" className="size-4 rounded border-gray-300 shadow-sm" id="Option1" />
                            </th>
                            
                            <th className="px-3 py-2 whitespace-nowrap">
                                <span className='flex items-center gap-1'>
                                    Receipt Id Number
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                    </svg>
                                </span>
                            </th>
                            <th className="px-3 py-2 whitespace-nowrap">
                                <span className='flex items-center gap-1'>
                                    Items Count
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                    </svg>
                                </span>
                            </th>
                            <th className="px-3 py-2 whitespace-nowrap">
                                <span className='flex items-center gap-1'>
                                    Staff Name
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                    </svg>
                                </span>
                            </th>
                            <th className="px-3 py-2 whitespace-nowrap">
                                <span className='flex items-center gap-1'>
                                    Total Amount
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                    </svg>
                                </span>
                            </th>
                            <th className="px-3 py-2 whitespace-nowrap">
                                <span className='flex items-center gap-1'>
                                    Payment Method
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                    </svg>
                                </span>
                            </th>
                            <th className="px-3 py-2 whitespace-nowrap">
                                <span className='flex items-center gap-1'>
                                    Time
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                    </svg>
                                </span>
                            </th>
                            <th className="px-3 py-2 whitespace-nowrap">Action</th>
                            
                        </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200 *:even:bg-gray-50">
                        <tr className="*:text-gray-900 *:first:font-medium">
                            <td className="px-3 py-2 whitespace-nowrap">
                                <input type="checkbox" className="size-4 rounded border-gray-300 shadow-sm" id="Option1" />
                            </td>
                            <td className="px-3 py-2 whitespace-nowrap">12458789</td>
                            <td className="px-3 py-2 whitespace-nowrap">12</td>
                            <td className="px-3 py-2 whitespace-nowrap">John</td>
                            <td className="px-3 py-2 whitespace-nowrap">30000 MMK</td>
                            <td className="px-3 py-2 whitespace-nowrap">Cash</td>
                            <td className="px-3 py-2 whitespace-nowrap">02/07/2025</td>
                            <td className="px-3 py-2 whitespace-nowrap">
                                <button className="px-2 py-1  border border-gray-300 rounded hover:bg-gray-400 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>

                        <tr className="*:text-gray-900 *:first:font-medium">
                            <td className="px-3 py-2 whitespace-nowrap">
                                <input type="checkbox" className="size-4 rounded border-gray-300 shadow-sm" id="Option1" />
                            </td>
                            <td className="px-3 py-2 whitespace-nowrap">12458789</td>
                            <td className="px-3 py-2 whitespace-nowrap">12</td>
                            <td className="px-3 py-2 whitespace-nowrap">John</td>
                            <td className="px-3 py-2 whitespace-nowrap">30000 MMK</td>
                            <td className="px-3 py-2 whitespace-nowrap">Cash</td>
                            <td className="px-3 py-2 whitespace-nowrap">02/07/2025</td>
                            <td className="px-3 py-2 whitespace-nowrap">
                                <button className="px-2 py-1  border border-gray-300 rounded hover:bg-gray-400 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        <tr className="*:text-gray-900 *:first:font-medium">
                            <td className="px-3 py-2 whitespace-nowrap">
                                <input type="checkbox" className="size-4 rounded border-gray-300 shadow-sm" id="Option1" />
                            </td>
                            <td className="px-3 py-2 whitespace-nowrap">12458789</td>
                            <td className="px-3 py-2 whitespace-nowrap">12</td>
                            <td className="px-3 py-2 whitespace-nowrap">John</td>
                            <td className="px-3 py-2 whitespace-nowrap">30000 MMK</td>
                            <td className="px-3 py-2 whitespace-nowrap">Cash</td>
                            <td className="px-3 py-2 whitespace-nowrap">02/07/2025</td>
                            <td className="px-3 py-2 whitespace-nowrap">
                                <button className="px-2 py-1  border border-gray-300 rounded hover:bg-gray-400 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        <tr className="*:text-gray-900 *:first:font-medium">
                            <td className="px-3 py-2 whitespace-nowrap">
                                <input type="checkbox" className="size-4 rounded border-gray-300 shadow-sm" id="Option1" />
                            </td>
                            <td className="px-3 py-2 whitespace-nowrap">12458789</td>
                            <td className="px-3 py-2 whitespace-nowrap">12</td>
                            <td className="px-3 py-2 whitespace-nowrap">John</td>
                            <td className="px-3 py-2 whitespace-nowrap">30000 MMK</td>
                            <td className="px-3 py-2 whitespace-nowrap">Cash</td>
                            <td className="px-3 py-2 whitespace-nowrap">02/07/2025</td>
                            <td className="px-3 py-2 whitespace-nowrap">
                                <button className="px-2 py-1  border border-gray-300 rounded hover:bg-gray-400 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        <tr className="*:text-gray-900 *:first:font-medium">
                            <td className="px-3 py-2 whitespace-nowrap">
                                <input type="checkbox" className="size-4 rounded border-gray-300 shadow-sm" id="Option1" />
                            </td>
                            <td className="px-3 py-2 whitespace-nowrap">12458789</td>
                            <td className="px-3 py-2 whitespace-nowrap">12</td>
                            <td className="px-3 py-2 whitespace-nowrap">John</td>
                            <td className="px-3 py-2 whitespace-nowrap">30000 MMK</td>
                            <td className="px-3 py-2 whitespace-nowrap">Cash</td>
                            <td className="px-3 py-2 whitespace-nowrap">02/07/2025</td>
                            <td className="px-3 py-2 whitespace-nowrap">
                                <button className="px-2 py-1  border border-gray-300 rounded hover:bg-gray-400 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        </tbody>
                </table>
                <div className='flex gap-3 justify-between items-center mt-5 px-5'>
                    <ul className="flex justify-start gap-1 text-gray-900">
                        
                        <li>
                            <label htmlFor="Page" className='flex items-center gap-2'>
                                <span className='text-gray-600 text-sm'>Items per page:</span>
                                <span className="sr-only"> Page </span>

                                <input
                                    type="number"
                                    id="Page"
                                    value={value}
                                    onChange={e => setValue(e.target.value)}
                                    className="h-8 w-16 px-2 rounded border border-gray-200 sm:text-sm"
                                />
                                <span className='text-gray-600 text-sm'>1-5 of 100 items</span>
                            </label>
                        </li>

                        
                    </ul>
                                
                    <ul className="flex items-center gap-3 text-gray-900">
                        <li>
                            <label htmlFor="Page">
                                <span className="sr-only"> Page </span>

                                <input
                                    type="number"
                                    id="Page"
                                    value={value}
                                    onChange={e => setValue(e.target.value)}
                                    className="h-8 w-16 px-2 rounded border border-gray-200 sm:text-sm"
                                />
                                <span className='text-gray-600 text-sm'> of 40 pages </span>
                            </label>
                        </li>

                        <li>
                            <a
                            href="#"
                            className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180"
                            aria-label="Previous page"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                                />
                            </svg>
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180"
                            aria-label="Next page"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                                />
                            </svg>
                            </a>
                        </li>
                    </ul>
                </div>    
            </div>
        </div>
    
  )
}

export default OrderHistory