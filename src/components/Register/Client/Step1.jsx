import React from "react";
import { styles } from "../../../styles";
import registervector from "../../../image/registervector.png";
import { Icon } from "@iconify/react";
import { Navigate, useNavigate } from "react-router-dom";

const Step1 = ({ values, setValues, step, setStep }) => {

  let navigate = useNavigate();
  const Continue = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  return (
    <div className={styles.screen}>
      <div className="hidden lg:flex lg:flex-row rounded-lg border-[1px] border-[#E1E1E1] w-[900px] items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center py-10 px-6">
          <h1 className="text-black font-regular font-semibold text-[35px] mb-10">
            Welcome to brickbitz
          </h1>
          <button className={`${styles.btnViolet} font-semibold w-full`} onClick={Continue}>
            Registrate con tu mail
          </button>
          <h1 className="text-[#868686] font-regular font-semibold text-[20px] mt-4 mb-4">
            o
          </h1>
          <button
            className={`${styles.btnGrey} flex items-center justify-center font-semibold w-full mb-2 relative`}
          >
            <Icon icon="devicon:google" className="absolute left-[20px]" />
            Crea tu cuenta con Google
          </button>
          <button
            className={`${styles.btnGrey} flex items-center justify-center font-semibold w-full mb-2 relative`}
          >
            <Icon icon="logos:apple" className="absolute left-[20px]" />
            Crea tu cuenta con Apple
          </button>
          <button className="mt-8 text-[16px] text-[#5E5E5E] " onClick={()=>{navigate("/login");}}>
            Ya tenes una cuenta?{" "}
            <span className="text-[#6D64D9]">Logueate</span>
          </button>
        </div>
        <div className="w-full bg-violet flex flex-col items-center justify-center h-full px-6 py-10 rounded-tr-lg rounded-br-lg ">
          <h1 className="text-[#fff] font-regular font-semibold text-[24px]">
            Registrate y comenza a hacer ganancias con tu dinero
          </h1>
          <h1 className="text-[#fff] font-regular text-[20px]">
            Nuesto proceso de registro lleva de menos de 10 minutos de completar
          </h1>
          <img src={registervector} className="w-[250px]" alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:hidden">
        <img src={registervector} alt="" className="w-[250px]" />
        <h1 className="text-black font-regular font-semibold text-[22px] sm:text-[28px] md:text-[30px] mb-10">
          Welcome to brickbitz
        </h1>
        <button className={`${styles.btnViolet} font-semibold w-full`} onClick={Continue}>
          Registrate con tu mail
        </button>
        <h1 className="text-[#868686] font-regular font-semibold text-[20px] mt-4 mb-4">
          o
        </h1>
        <button
          className={`${styles.btnGrey} flex items-center justify-center font-semibold w-full mb-2`}
        >
          <Icon icon="devicon:google" className="mr-6" />
          Crea tu cuenta con Google
        </button>
        <button
          className={`${styles.btnGrey} flex items-center justify-center font-semibold w-full mb-2 `}
        >
          <Icon icon="logos:apple" className="mr-6" />
          Crea tu cuenta con Apple
        </button>
        <login className="mt-8 text-[16px] text-[#5E5E5E] " onClick={()=>{navigate("/login");}}>
          Ya tenes una cuenta? <span className="text-[#6D64D9]">Logueate</span>
        </login>
      </div>
    </div>
  );
};

export default Step1;
