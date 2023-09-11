import React from 'react'
import tablet from '../../image/tablet.png'

const Inverti = () => {
    return (
        <div className='w-screen min-h-screen pt-20 flex flex-col items-center justify-start'>
            <h1 className='text-gray600 text-[50px]'>Invertí con intelgiencia,<br />
                cosecha con propiedad</h1>
            <h1 className='text-gray600 text-[30px]'>Conoce todo sobre los proyectos</h1>
            <div className='flex flex-row justify-between items-center w-[25%]  mt-4'>
                <button className='w-[48%] py-2 rounded-[20px] bg-gray800 text-gray100 border-[1px] border-gray800'>Conoce funciona</button>
                <button className='w-[48%] py-2 rounded-[20px] bg-transparent text-gray800 border-[1px] border-gray800'>Comenza ahora</button>
            </div>
            {/* <img src={tablet} alt="" className='w-[80%]'/> */}
        </div>
    )
}

export default Inverti