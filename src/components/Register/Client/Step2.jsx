import React, { useState } from "react";
import { styles } from "../../../styles";
import registerdatavector from "../../../image/registerdatavector.png";
import { Icon } from "@iconify/react";
import { Navigate, useNavigate } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import PasswordStrengthBar from "react-password-strength-bar";

const Step2 = ({ values, setValues, step, setStep }) => {
  const [showPassword, setShowPassword] = useState(false);
  let navigate = useNavigate();
  const Continue = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };
  const [showPassword2, setShowPassword2] = useState(false);

  return (
    <div className={styles.screen}>
      <div className="hidden lg:flex lg:flex-row rounded-lg border-[1px] border-[#F3F5F9] w-[900px] items-center justify-center mt-10">
        <div className="w-full flex flex-col items-center justify-center py-10 px-6">
          <h1 className="text-black font-regular font-semibold text-[28px] mb-4">
            Crea tu cuenta
          </h1>
          <form action="" className={styles.registerForm}>
            <h1 className={styles.registerLabel}>Nombre de usuario</h1>
            <input
              type="text"
              placeholder="Tu usuario"
              className={styles.registerInput}
            />
            <h1 className={styles.registerLabel}>Email</h1>
            <input
              type="email"
              placeholder="Tu mail"
              className={styles.registerInput}
            />
            <h1 className={styles.registerLabel}>Contraseña</h1>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Tu contraseña"
                value={values.password}
                className={styles.registerInput}
                onChange={(event) => {
                  setValues({ ...values, password: event.target.value });
                }}
              />
              <span
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "0rem",
                  margin: "0rem",
                  top: "7px",
                  right: "10px",
                  position: "absolute",
                  zIndex: "10",
                }}
              >
                <VisibilityOutlinedIcon
                  style={{}}
                  onClick={() => setShowPassword(!showPassword)}
                ></VisibilityOutlinedIcon>
              </span>
            </div>
            <PasswordStrengthBar password={values.password} />
            <h1 className={styles.registerLabel}>Repite tu contraseña</h1>
            <div className="relative">
              <input
                type={showPassword2 ? "text" : "password"}
                placeholder="Repite tu contraseña"
                className={styles.registerInput}
              />
              <span
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "0rem",
                  margin: "0rem",
                  top: "7px",
                  right: "10px",
                  position: "absolute",
                  zIndex: "10",
                }}
              >
                <VisibilityOutlinedIcon
                  style={{}}
                  onClick={() => setShowPassword2(!showPassword2)}
                ></VisibilityOutlinedIcon>
              </span>
            </div>
            <button className={styles.registerBtn} onClick={Continue}>
              Registrate
            </button>
          </form>
          <button
            className="mt-2 text-[16px] text-[#5E5E5E] "
            onClick={() => {
              navigate("/login");
            }}
          >
            Ya tenes una cuenta?{" "}
            <span className="text-[#6D64D9]">Logueate</span>
          </button>
        </div>
        <div className="w-full bg-[#F3F5F9] flex flex-col items-center justify-center h-full px-10 py-10 rounded-tr-lg rounded-br-lg ">
          <h1 className="text-violet font-regular font-semibold text-[34px] text-center mb-4">
            ¡Únete a nuestra comunidad!
          </h1>
          <h1 className="text-[#868686] font-regular font-semibold text-[20px] mb-0">
            Para acceder a nuestra plataforma, por favor completa el formulario
            de registro a continuación.
          </h1>
          <img src={registerdatavector} className="w-[300px]" alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:hidden">
        <img src={registerdatavector} className="w-[200px]" alt="" />
        <h1 className="text-black font-regular font-semibold text-[28px] mb-4">
          Crea tu cuenta
        </h1>
        <form action="" className={styles.registerForm}>
          <h1 className={styles.registerLabel}>Nombre de usuario</h1>
          <input
            type="text"
            placeholder="Tu usuario"
            className={styles.registerInput}
          />
          <h1 className={styles.registerLabel}>Email</h1>
          <input
            type="email"
            placeholder="Tu mail"
            className={styles.registerInput}
          />
          <h1 className={styles.registerLabel}>Contraseña</h1>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Tu contraseña"
              value={values.password}
              className={styles.registerInput}
              onChange={(event) => {
                setValues({ ...values, password: event.target.value });
              }}
            />
            <span
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "0rem",
                margin: "0rem",
                top: "7px",
                right: "10px",
                position: "absolute",
                zIndex: "10",
              }}
            >
              <VisibilityOutlinedIcon
                style={{}}
                onClick={() => setShowPassword(!showPassword)}
              ></VisibilityOutlinedIcon>
            </span>
          </div>
          <PasswordStrengthBar password={values.password} />
          <h1 className={styles.registerLabel}>Repite tu contraseña</h1>
          <div className="relative">
            <input
              type={showPassword2 ? "text" : "password"}
              placeholder="Repite tu contraseña"
              className={styles.registerInput}
            />
            <span
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "0rem",
                margin: "0rem",
                top: "7px",
                right: "10px",
                position: "absolute",
                zIndex: "10",
              }}
            >
              <VisibilityOutlinedIcon
                style={{}}
                onClick={() => setShowPassword2(!showPassword2)}
              ></VisibilityOutlinedIcon>
            </span>
          </div>
          <button className={styles.registerBtn} onClick={Continue}>
            Registrate
          </button>
        </form>
        <button
          className="mt-2 text-[16px] text-[#5E5E5E] "
          onClick={() => {
            navigate("/login");
          }}
        >
          Ya tenes una cuenta? <span className="text-[#6D64D9]">Logueate</span>
        </button>
      </div>
    </div>
  );
};

export default Step2;
