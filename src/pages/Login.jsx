import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import AuthCode from "react-auth-code-input";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { styles } from "../styles";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "../image/Isotipo.png";

const Login = ({user,setUser}) => {
  const [qrCode, setQrCode] = useState(null);
  const [displayQr, setDisplayQr] = useState(false);
  const [qrmodal, setQrmodal] = useState(false);
  const [params, setParams] = useState(false);
  const [modalqr, setModalqr] = useState(false);
  const [create, setCreate] = useState(false);
  const [tokenLogin, setTokenlogin] = useState("");
  const [LoginToken, setLoginToken] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  //Redux stuff
  //   const dispatch = useDispatch();
  //   const user = useSelector((state) => state.user);
  //   const { updateUser } = bindActionCreators(actionCreators, dispatch);
  const [twoFaActive, setToFa] = useState(false);

  useEffect(() => {
    activar(values.email, values.type, LoginToken);
  }, [params]);

  const activar = (a, LoginToken) => {
    // updateUser({
    //   email: a,
    //   activo: false,
    //   logintoken: LoginToken,
    // });
  };

  const renderQr = (res) => {
    setQrCode(res.data.qrcode);
    setDisplayQr(true);
  };

  const submitFormData = (e) => {
    e.preventDefault();
    setUser({...user,activo:true})
    navigate("/projects")

  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="w-screen h-screen flex items-center justify-center flex-col pt-8">
        <div className="rounded-lg border-[1px] border-[#E1E1E1] p-10 flex flex-col items-center">
          <img
            src={logo}
            className="h-[60px] sm:h-[60px] md:h-[60px] lg:h-[60px] xl:h-[50px] 2xl:h-[50px] mb-4"
          />

          <form action="" className={styles.loginForm}>
            <h1 className={`${styles.loginTitle} text-start w-full`}>
            Sign in to BrickBitz
            </h1>
            <input
              label="Email"
              required={true}
              autoComplete="off"
              placeholder="Email"
              type="mail"
              onChange={(event) => {
                setValues({ ...values, email: event.target.value });
              }}
              className={`${styles.loginInput} btnNoBorder`}
            />
            <div className="w-full relative">
              <input
                id="standard-basic"
                type={showPassword ? "text" : "password"}
                label="Password"
                variant="standard"
                required={true}
                placeholder="Password"
                onChange={(event) => {
                  setValues({ ...values, password: event.target.value });
                }}
                className={`${styles.loginInput} btnNoBorder`}
              />
              <span
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "0rem",
                  margin: "0rem",
                  top: "15px",
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
            <div className="w-full  mt-2 flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between">
              <div className="flex items-center justify-center">
                <input type="checkbox" className="ml-2" />
                <label className="font-regular text-[15px] font-light ml-2">
                  Remember my password
                </label>
              </div>
              <a href="#" className="text-violet">
                Forgot your password?
              </a>
            </div>

            <div className={styles.loginBtnContainer}>
              <button
                className={styles.loginBtnAccept}
                onClick={submitFormData}
              >
                Sign in
              </button>
            </div>
            <button
              className="text-regular text-[15px] text-[#25f3542] font-semibold text-left w-full mt-4"
              onClick={() => {
                navigate("/register");
              }}
            >
              New here?{" "}
              <span className="text-violet">Create a BrickBitz account</span>{" "}
            </button>
          </form>
        </div>
      </div>
      {/* {modalqr && (
      <ModalLoginAuth
        create={create}
        setCreate={setCreate}
        setModalqr={setModalqr}
        tokenLogin={tokenLogin}
      ></ModalLoginAuth>
    )}

    {displayQr && (
      <ModalQr
        create={create}
        setCreate={setCreate}
        qrmodal={qrmodal}
        setQrmodal={setQrmodal}
        setModalqr={setModalqr}
        qr={qrCode}
        setDisplayQr={setDisplayQr}
      ></ModalQr>
    )} */}
    </>
  );
};

export default Login;
