import React, { useState } from 'react'
import tomi from '../../image/tomi.png'
import diego from '../../image/diego.png'
import facu from '../../image/facu.png'
import espert from '../../image/espert.png'
import tomimodal from '../../image/tomimodal.png'
import diegomodal from '../../image/diegomodal.png'
import facumodal from '../../image/facumodal.png'
import espertmodal from '../../image/espertmodal.png'
import { Dialog } from 'primereact/dialog';
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';
import { Icon } from '@iconify/react';
const usuarios = [
    { nombre: "Diego Ballester", puesto: "CTO", descripcion: "Soy un ingeniero en sistemas graduado de la Universidad Tecnológica Nacional (UTN), con una sólida experiencia como programador backend en Mercado Libre.Además de mi rol como programador, también me desempeño como Project Manager, liderando equipos multidisciplnarios en la ejecucion de proyectos tecnologicos", img: diegomodal },
    { nombre: "Facundo Güell", puesto: "CTO", descripcion: "Soy un ingeniero en sistemas graduado de la Universidad Tecnológica Nacional (UTN), con una sólida experiencia como programador backend en Mercado Libre. Además de mi rol como programador, también me desempeño como Project Manager, liderando equipos multidisciplnarios en la ejecucion de proyectos tecnologicos", img: espertmodal },
    { nombre: "Tomas Kahn", puesto: "CTO", descripcion: "Soy un ingeniero en sistemas graduado de la Universidad Tecnológica Nacional (UTN), con una sólida experiencia como programador backend en Mercado Libre Además de mi rol como programador, también me desempeño como Project Manager, liderando equipos multidisciplnarios en la ejecucion de proyectos tecnologicos", img:  tomimodal},
    { nombre: "Facundo Zalloco", puesto: "CTO", descripcion: "Soy un ingeniero en sistemas graduado de la Universidad Tecnológica Nacional (UTN), con una sólida experiencia como programador backend en Mercado Libre. Además de mi rol como programador, también me desempeño como Project Manager, liderando equipos multidisciplnarios en la ejecucion de proyectos tecnologicos", img: facumodal }
]// icons

const Equipo = () => {
    const [visible, setVisible] = useState(false);
    const [selectedUser, setSelectedUser] = useState({})

    return (
        <>
            <div className='w-screen min-h-screen flex flex-col items-center justify-start pt-20'>
                <h1 className='text-[40px] text-gray500 mb-6'>Nuesto equipo.</h1>
                <div className='flex flex-row items-center justify-around w-[50%] mb-4'>
                    <div className='flex flex-col items-center bg-gray100 rounded-[12px]  w-[343px] hovershadow cursor-pointer' onClick={() => { setSelectedUser(usuarios[0]); setVisible(!visible) }}>
                        <h1 className='text-[24px] text-gray500  pt-4 mb-4'>Diego Ballester</h1>
                        <img src={diego} alt="" />
                    </div>
                    <div className='flex flex-col items-center bg-gray100 rounded-[12px]  w-[343px] hovershadow cursor-pointer' onClick={() => { setSelectedUser(usuarios[1]); setVisible(!visible) }}>
                        <h1 className='text-[24px] text-gray500  pt-4 mb-4'>Facundo Güell</h1>
                        <img src={espert} alt="" />
                    </div>
                </div>
                <div className='flex flex-row items-center justify-around w-[50%]' >
                    <div className='flex flex-col items-center bg-gray100 rounded-[12px] w-[343px] hovershadow cursor-pointer' onClick={() => { setSelectedUser(usuarios[2]); setVisible(!visible) }}>
                        <h1 className='text-[24px] text-gray500  pt-4 mb-4'>Tomas Kahn</h1>
                        <img src={tomi} alt="" />
                    </div>
                    <div className='flex flex-col items-center bg-gray100 rounded-[12px]  w-[343px] cursor-pointer hovershadow ' onClick={() => { setSelectedUser(usuarios[3]); setVisible(!visible) }}>
                        <h1 className='text-[24px] text-gray500  pt-4 mb-4'>Facundo Zalloco</h1>
                        <img src={facu} alt="" />
                    </div>

                </div>

            </div>
            <Dialog visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} className='bg-violet500'>
                <div className='flex flex-col items-start justify-center w-full px-10'>
                    <div className='flex flex-row items-center justify-start w-full'>
                        <img src={selectedUser.img} alt="" className=' mr-10'/>
                        <div className='flex flex-col items-start'>
                            <h1 className='text-gray700 text-[40px]'>{selectedUser.nombre}</h1>
                            <h1 className='text-gray400 text-[32px]'>{selectedUser.puesto}</h1>
                        </div>
                    </div>
                    <h1 className='text-gray400 text-[20px] mt-4'>{selectedUser.descripcion}</h1>
                    <Icon icon="devicon:linkedin" height="50" className='mt-8 cursor-pointer' />
                </div>
            </Dialog>
        </>
    )
}

export default Equipo