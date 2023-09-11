import React from 'react'
import building1 from '../../image/building1.png'
import building2 from '../../image/building2.png'

const Potencial = () => {
    return (
        <div className='w-screen min-h-screen px-20 flex flex-col items-center justify-start mt-8'>
            <div className='mi-div2 w-full h-[450px] bg-[#000000] rounded-[12px] flex flex-col px-12 justify-center'>
                <h1 className='w-[60%] text-[40px] text-gray100'>Discover the limitless potential of investing in tokenization: growth, liquidity, and accessibility on a single platform.</h1>
            </div>
            <div className='w-full h-[320px] flex flex-row items-center justify-between mt-4'>
                <div className='h-[100%] w-[32%] bg-[#DAE1EF] rounded-[12px] flex items-center justify-center'>
                    <img src={building1} alt="" />
                </div>
                <div className='h-[100%] w-[32%] rounded-[12px] mi-degradado flex items-center px-10'>
                    <h1 className='text-gray100 text-[40px]'>Earn profits from the rental income of your investments.</h1>
                </div>
                <div className='h-[100%] w-[32%] bg-[#DAE1EF] rounded-[12px] flex items-center justify-center'>
                    <img src={building2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Potencial