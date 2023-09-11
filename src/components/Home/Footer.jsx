import React from 'react'
import { Icon } from "@iconify/react";
import brickslogo from '../../image/brickslogo.png'
import { Navigate, useNavigate } from "react-router-dom";

const Footer = () => {
    let navigate = useNavigate();
    return (
        <div className="bg-gray-700 w-screen px-0 sm:px-10 md:px-14 lg:px-20 py-10">
            <div className="hidden lg:flex md:flex-row items-start">
                <div className="flex flex-col">
                    <div className="flex flex-row items-center ">
                        <img src={brickslogo} alt="" className="h-[20px] mr-2" />
                        <h1 className="font-['Gelion'] text-[32px] text-white">
                            Brickbitz
                        </h1>
                    </div>
                    <div className="flex flex-row mt-4">
                        <div
                            className="max-w-min rounded-md bg-gray-800 rounded-[200px] p-4 mr-2 cursor-pointer"
                        >
                            <a href="mailto:administracion@brickbitz.com">
                                <Icon icon="mdi:email" width={30} className="text-white" />
                            </a>
                        </div>
                        <div

                            className="max-w-min rounded-md bg-gray-800 rounded-[200px] p-4 cursor-pointer"
                        >
                            <a href="https://www.youtube.com/@brickit8821">
                                <Icon icon="bi:youtube" width={30} className="text-white" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="ml-4 md:ml-8 lg:ml-10 xl:ml-20 flex flex-row items-center justify-around pt-2">
                    <button onClick={() => {
                        navigate("/portfolio");
                    }} href="" className="font-['Gelion'] text-[20px] text-white mr-8">Portfolio</button>
                    <button onClick={() => {
                        navigate("/projects");
                    }} href="" className="font-['Gelion'] text-[20px] text-white">Projects</button>
                </div>
            </div>
            <div className="flex flex-col lg:hidden justify-center items-center px-4">
                <div className="flex flex-col mb-6">
                    <div className="flex flex-row items-center justify-center ">
                        <img src={brickslogo} alt="" className="h-[20px] mr-2" />
                        <h1 className="font-['Gelion'] text-[32px] text-white">
                            Brickbitz
                        </h1>
                    </div>
                    <div className="flex flex-row mt-4">

                        <div

                            className="max-w-min rounded-md bg-gray-800 rounded-[200px] p-4 mr-2"
                        >
                            <a href="mailto:administracion@brickbitz.com">
                                <Icon icon="mdi:email" width={30} className="text-white" />
                            </a>
                        </div>
                        <div

                            className="max-w-min rounded-md bg-gray-800 rounded-[200px] p-4 "
                        >
                            <a href="https://www.youtube.com/@brickit8821">
                                <Icon icon="bi:youtube" width={30} className="text-white" />
                            </a>
                        </div>
                    </div>
                </div>
                <button onClick={() => {
                    navigate("/portfolio");
                }} href="" className="font-['Gelion'] text-[20px] text-white ">Portfolio</button>
                <button onClick={() => {
                    navigate("/projects");
                }} href="" className="font-['Gelion'] text-[20px] text-white">Projects</button>
            </div>
        </div>
    )
}



export default Footer