'use client'
import OrderSummary from './order-summary'
import { useState } from 'react'
export default function OrderSummaryLayout() {
  const [isOpenSlide, setIsOpenSlide] = useState(false)
  return (
    <>
      <div className="lg:hidden md:hidden   w-[20%] p-3">
        <p
          //   className="ms-5"
          onClick={() => {
            setIsOpenSlide((prev) => (!prev ? true : false))
          }}>
          Icon
        </p>
      </div>
      {/* add some class */}
      <div
        className={`fixed lg:relative md:relative ${
          isOpenSlide ? 'right-[0px] w-[100%]' : 'right-[-400px]'
        }  lg:right-0 md:right-0 bg-white w-1/3 h-[calc(100vh-75px)] overflow-hidden pt-5 flex flex-col`}>
        {isOpenSlide && (
          <p
            className="ms-6 mb-3"
            onClick={() => {
              setIsOpenSlide((prev) => (!prev ? true : false))
            }}>
            X
          </p>
        )}
        <OrderSummary />
      </div>
    </>
  )
}
