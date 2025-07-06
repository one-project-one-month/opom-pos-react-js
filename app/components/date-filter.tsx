"use client";
import React, { use } from 'react';

import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { DateRangePicker } from 'react-date-range';

function DateFilter() {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState({
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    });
  
    const handleSelect = (ranges: any) => {
      setDate(ranges.selection);
    }

    const handleClick = () => {
      setOpenDate((prev) => !prev);
    }
  return (
    <div className='container relative'>
        <span 
          className='flex items-center gap-3 cursor-pointer border border-gray-300 rounded-sm px-2 py-1 text-gray-600 hover:bg-gray-100 transition-all duration-200'
          onClick={handleClick} 
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>
            <span>{format(date.startDate, 'dd/MMM/yyyy')}</span> - <span>{format(date.endDate, 'dd/MMM/yyyy')}</span>
        </span>
        {openDate && <DateRangePicker
        className="absolute top-120px z-10 right-0"
        ranges={[date]}
        onChange={handleSelect}
        minDate={new Date()}
      />}
    </div>
  )
}

export default DateFilter