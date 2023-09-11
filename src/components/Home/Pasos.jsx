import React from 'react'
import building from '../../image/building3.png'
const Pasos = () => {
  return (
    <div className='w-screen min-h-screen flex flex-col items-center justify-start pt-[100px] px-20'>
        <div className='flex flex-row items-center justify-between w-[100%] h-[280px]'>
            <div className='flex items-center bg-black h-full w-[20%] rounded-[20px] px-8 mr-6'>
                <h1 className='text-violet100 text-[50px]'>Getting <br /> started</h1>
            </div>
            <div className='flex flex-col justify-center items-start bg-[#DAE1EF] h-full w-[24%] rounded-[20px] px-10'>
                <div className='flex items-center justify-center rounded-full w-[40px] h-[40px] bg-gray500 mb-4'>
                    <h1 className='text-gray100 text-[24px]'>1</h1>
                </div>
                <h1 className='text-left text-gray500 text-[30px]'>Registration</h1>
                <h1 className='text-left text-gray400 text-[24px]'>Simple Registration in a Few Steps. </h1>
            </div>
            <div className='flex flex-col justify-center items-start bg-[#DAE1EF] h-full w-[24%] rounded-[20px] px-10'>
                <div className='flex items-center justify-center rounded-full w-[40px] h-[40px] bg-gray500 mb-4'>
                    <h1 className='text-gray100 text-[24px]'>2</h1>
                </div>
                <h1 className='text-left text-gray500 text-[30px]'>Verification</h1>
                <h1 className='text-left text-gray400 text-[24px]'>Easy registration in a few steps.</h1>
            </div>
            <div className='flex flex-col justify-center items-start bg-[#DAE1EF] h-full w-[24%] rounded-[20px] px-10'>
                <div className='flex items-center justify-center rounded-full w-[40px] h-[40px] bg-gray500 mb-4'>
                    <h1 className='text-gray100 text-[24px]'>3</h1>
                </div>
                <h1 className='text-left text-gray500 text-[30px]'>Invest</h1>
                <h1 className='text-left text-gray400 text-[24px]'>Build your investment portfolio with just $10.</h1>
            </div>
        </div>
        <div className='flex flex-row items-center justify-between w-[100%] h-[400px] mt-6'>
            <div className='w-[55%] h-full bg-[#DAE1EF] rounded-[20px] flex flex-col justify-center px-14'>
                <h1 className='text-left text-gray500 text-[34px] w-[60%] mb-2'>Grow your capital by investing with us.</h1>
                <h1 className='text-left text-gray400 text-[26px] w-[90%]'>Discover new income opportunities through property rentals and their long-term appreciation potential.</h1>
            </div>
            <div className='w-[42%] h-full bg-black rounded-[20px]  flex flex-col justify-center items-center'>
                <img src={building} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Pasos