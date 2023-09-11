import React,{useState} from 'react'
import { Icon } from "@iconify/react";
import { Navigate, useNavigate } from "react-router-dom";


const clientes = [
    { titulo: "Projects", direccion: "/projects" },
    { titulo: "Portfolio", direccion: "/portfolio" },
  ];

const NavDesktop = ({logo,user,setUser}) => {
    let navigate = useNavigate();
  return (
    <>
    <div className="fixed hidden w-screen  bg-transparent xl:flex xl:flex-row justify-between items-center px-20 py-4 z-40">
      <img src={logo} alt="" className="h-[50px] cursor-pointer" onClick={()=>{navigate("/")}}/>
      {!user.activo && (
        <div className="flex flex-row items-center">
          <button
            className="flex flex-row items-center justify-centercursor-pointer text-white bg-violet500 border-[2px] rounded-[20px] border-violet500 font-regular font-medium font- text-[20px] px-4 py-[5px] "
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign in
            <Icon icon="formkit:arrowright" width="20" className='text-white ml-2'/>
          </button>
        </div>
      )}
      {user.activo && (
        <div className="flex flex-row items-center">
          {clientes.map((dir, index) => {
            return (
              <a className="font-regular font-semibold text-[16px] text-gray400 hover:text-gray500 cursor-pointer ml-16" onClick={()=>{navigate(dir.direccion)}}>
                {dir.titulo}
              </a>
            );
          })}
          <button className="cursor-pointer text-violet500 bg-transparent border-[2px] rounded-[10px] border-violet500 font-regular font-bold font- text-[18px] px-2 py-[5px] ml-20" onClick={()=>{setUser({...user,activo:false});navigate("")}}>
          Log out
          </button>
        </div>
      )}
    </div>
  </>
  )
}

export default NavDesktop