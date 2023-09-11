import React, { useState, useEffect } from "react";
import axios from "axios";
import { styles } from "../../styles";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "../../image/logo.png";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";


const Nav = ({user,setUser}) => {
  const [opened, setOpened] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setOpened(false);
      } else {
      }
    };

    window.addEventListener("resize", handleResize);

    // Limpieza del efecto cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <NavDesktop logo={logo} user={user} setUser={setUser}></NavDesktop>
      <NavMobile opened={opened} setOpened={setOpened} logo={logo} user={user} setUser={setUser}></NavMobile></>

  );
};

export default Nav;
