import React from 'react'

const RealState = () => {
  return (
    <div className='w-screen min-h-screen flex flex-col items-center justify-start pt-8'>
        <h1 className='text-gray600 text-[50px]'>Now in Real Estate.</h1>
        <h1 className='text-gray400 text-[22px] lg:w-[50%] text-center'>We offer you the opportunity to invest your capital in multiple real estate projects through tokenization.</h1>
        <div className='flex flex-row justify-between w-[90%] h-[600px] mt-6'>
            <div className='flex flex-col justify-between w-[35%] h-[100%]'>
                <div className='w-full h-[48%] bg-[#000000] flex flex-col justify-end py-4 rounded-[12px] mi-div'>
                    <h1 className='text-[16px] text-gray300 text-left px-8'>Only 1% in fees.</h1>
                    <h1 className='text-[40px] text-gray100 text-left px-8'>Get started with just $10.</h1>
                </div>
                <div className='w-full h-[48%] mi-degradado flex flex-col justify-center rounded-[12px]'>
                    <h1 className='text-[28px] text-gray200 text-left px-8'>Our goal</h1>
                    <h1 className='text-[36px] text-gray100 text-left px-8'>Make real estate investments accessible</h1>
                </div>
            </div>
            <div className='flex flex-col w-[62%] h-[100%] bg-[#E8EAEE] flex flex-col px-20 justify-center rounded-[12px]'>
                <h1 className='text-gray700 text-[50px]'>Discover.</h1>
                <h1 className='text-gray700 text-[50px]'>Diversify.</h1>
                <h1 className='text-gray700 text-[50px]'>Earn profits.</h1>
                <h1 className='text-gray400 text-[28px] w-[60%]'>Sign up and start investing in construction projects, land development, or apartment complexes</h1>
            </div>
        </div>
    </div>
  )
}

export default RealState