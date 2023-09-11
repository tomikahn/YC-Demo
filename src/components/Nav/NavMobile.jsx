import React from 'react'
import { Icon } from "@iconify/react";
import { Navigate, useNavigate } from "react-router-dom";

const clientes = [
  { titulo: "Projects", direccion: "/" },
  { titulo: "Tokens", direccion: "/" },
  { titulo: "Dashboard", direccion: "/" },
  { titulo: "Education", direccion: "/" },
  ];

const NavMobile = ({opened,setOpened,logo,user,setUser,}) => {
    let navigate = useNavigate();
  return (
    <>
    <div className="fixed z-40 flex flex-row xl:hidden w-screen items-center justify-center bg-white py-4 z-40 overflow-hidden">
      <img src={logo} alt="" className="h-[40px] cursor-pointer" onClick={()=>{navigate("/")}}/>
      <div
        id="nav-icon3"
        style={{
          margin: "0 auto",
          marginLeft: "0px",
          marginRight: "0px",
          position: "absolute",
          right: "25px",
        }}
        className={opened ? "open p-0 m-0 w-auto" : "close"}
        onClick={() => setOpened(!opened)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div
      id="mobile-nav"
      style={{ zIndex: "25", marginTop: "0px" }}
      className={
        opened
          ? "miDiv mostrar h-screen w-screen bg-[#FFF] absolute lg:hidden"
          : "miDiv ocultar"
      }
    >
      <div className="flex flex-col mt-6 ml-[2rem] text-[20px] font-regular">
        <div className="h-[60px]"></div>
        <div className="text-left font-regular text-[18px] text-gray300 mb-4">
          <h1>Mas opciones de nuestra plataforma</h1>
        </div>
        {!user.activo && (
          <div className="flex flex-col items-start">
            <button
              className="text-[26px] my-5 text-left font-regular font-bold text-gray400 hover:text-gray500"
              onClick={() => {
                navigate("/login");
                setOpened(!opened)
              }}
            >
              Ingresar
            </button>
            <button
              className="text-[26px] my-5 text-left font-regular font-bold text-gray400 hover:text-gray500"
              onClick={() => {
                navigate("/registro");
                setOpened(!opened)
              }}
            >
              Registrarme
            </button>
          </div>
        )}
        {user.activo && (
          <div className="flex flex-col items-start">
            {clientes.map((dir, index) => {
              return (
                <a className="text-[26px] my-5 text-left font-regular font-bold text-gray400 hover:text-gray500" onClick={()=>{navigate(dir.direccion);setOpened(!opened)}}>
                  {dir.titulo}
                </a>
              );
            })}
            <button className="text-violet500 text-[26px] my-5 text-left font-regular font-bold  hover:text-gray500 absolute bottom-0" onClick={()=>{setOpened(!opened)}}>
            Log out
            </button>
          </div>
        )}
      </div>
    </div>
  </>
  )
}

export default NavMobile