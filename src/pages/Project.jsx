import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import project4 from '../image/project4.png';
import project5 from '../image/project5.png';
import project6 from '../image/project6.png';
import { Carousel } from 'primereact/carousel';
import { Chip } from 'primereact/chip';
import { Card } from 'primereact/card';
import Footer from '../components/Home/Footer';
import { Divider } from 'primereact/divider';


const Project = () => {

    return (
        <>
            <div className='w-screen min-h-screen flex flex-col items-star justify-start pt-[100px] px-20 mb-10'>
                <h1 className='text-left font-semibold text-gray500 text-[32px]'>South Beach</h1>
                <h1 className='text-left text-gray400 text-[20px]'>Exclusive luxury townhouses to be located in Miami's Bay Harbor Island Townhouse Community.</h1>
                <div className='flex flex-row items-center justify-start mt-4 mb-2'>
                    <h1 className='text-gray300 text-[18px] mr-2'>United States</h1>
                    <h1 className='text-gray300 text-[18px] mr-4'>Miami, Florida</h1>
                    <Icon icon="emojione-v1:flag-for-united-states" width={20} className='p-0' />
                    <h1 className='text-gray300 text-[18px] ml-4'>8333 NW 53rd St. Doral</h1>
                </div>
                <div className='flex w-full  flex-row items-start justify-between h-[500px] '>
                    <div className='h-full  w-[60%]'>
                        <img src={project4} alt="" className='rounded-[20px] imageper' />
                    </div>
                    <div className='h-full  w-[38%]'>
                        <div className='w-full h-full flex flex-col items-center justify-between'>
                            <div className='w-[100%] h-[48%] '>
                                <img src={project5} alt="" className='rounded-[20px] imageper' />
                            </div>
                            <div className='w-[100%] h-[48%] '>
                                <img src={project6} alt="" className='rounded-[20px] imageper' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-4 flex flex-row items-*center justify-between'>
                    <div className='flex flex-row items-center justify-start'>
                        <Chip label="Land" className="mr-2 px-4 py-2 bg-violet500 rounded-[20px] text-gray100" />                </div>
                    <h1 className='text-gray400 text-[20px]'>Colaborator : Brickbitz SA</h1>
                </div>
                <div className='flex flex-row items-start justify-between w-full mt-4'>
                    <div className='w-[75%]'>
                        <h1 className='text-gray500 text-justify font-normal text-[18px]'>Located just steps away from the world-renowned Bal Harbour Shops, beautiful beaches, fabulous restaurants and boutiques. The charming town of Bay Harbor Island is also home to the award-winning, "A" rated Ruth K. Broad K-8 Center. Considered one of the most prestigious locations in South Florida, 93 Bay Harbor offers something new and exciting to the town and village of Bal Harbor Islands. These luxurious, contemporary residences feature open and spacious floor plans that also allow for custom living options to meet the individual needs of our discerning buyers. Residences include floor-to-ceiling windows, private terraces, two-car garages, fabulous kitchens, bathrooms and rooftop terraces. Located just to the north are Aventura Mall, Gulfstream Shops, restaurants, casinos and the prominent Hollywood beachfront promenade, which offers joggers, bicyclists and pedestrians the opportunity to enjoy dining venues and cafes along the oceanfront thoroughfare.</h1>
                        <div className='mt-4 h-[600px] w-full'>
                            <img src={project5} alt="" className='rounded-[20px] imageper' />
                        </div>

                    </div>
                    <div className='w-[18%] flex flex-col items-center justify-start shadow rounded-[12px] py-4 px-4'>
                        <div className='flex items-center justify-start flex-col border-[1px] rounded-[12px] border-gray200 w-full'>
                            <h1 className='text-[24px] text-gray600 font-semibold'>SBEA</h1>
                            <h1 className='text-gray300'>South Beach</h1>
                            <div className='h-[1px] bg-gray200 w-full mt-2 mb-4'></div>
                            <div className='w-full  flex flex-row items-center justify-around mb-2'>
                                <div className='flex flex-col items-start justify-start'>
                                    <h1>Start date:</h1>
                                    <h1>20/04/2023</h1>
                                </div>
                                <div className='flex flex-col items-start justify-start'>
                                    <h1>Finish date:</h1>
                                    <h1>05/02/2024</h1>
                                </div>
                            </div>
                        </div>
                        <h1 className='mt-4 text-gray500 text-justify'>Exclusive luxury townhouses to be located in Miami's Bay Harbor Island Townhouse Community.</h1>
                        <h1 className='mt-4 text-gray300 text-[16px] text-left w-full'>Total amount:</h1>
                        <h1 className=' text-gray600 font-semibold text-[24px] text-left w-full'>450.000</h1>
                        <h1 className='mt-2 text-gray300 text-[16px] text-left w-full'>Token price</h1>
                        <h1 className=' text-[#0FB186] font-semibold text-[24px] text-left w-full'>USD $29</h1>
                        <h1 className='mt-2 text-gray300 text-[16px] text-left w-full'>Valuation</h1>
                        <h1 className=' text-[#0FB186] font-semibold text-[24px] text-left w-full'>USD $13.000.000</h1>
                        <div className='h-[1px] bg-gray300 w-full mt-2'></div>
                        <div className='flex flex-row justify-betweem items-center w-full mt-4 '>
                            <button className=' text-white bg-[#0FB186] text-[16px] rounded-[12px] items-center px-4 py-[2px] cursor-pointer'>Buy now</button>
                        </div>


                    </div>
                </div>
            </div>
            <Footer>
            </Footer>
        </>

    )
}

export default Project