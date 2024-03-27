"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import nightMode from "../assets/nightMode.png";
import lightMode from "../assets/light-mode.png";

export default function ThemeSetter() {
  const [mode, setMode] = useState('dark');

  const changeTheme = () => {
    console.log(
      window.matchMedia("(prefers-color-scheme: dark)"),
      localStorage.theme
    );
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    
    if (mode != "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setMode(localStorage.theme);
  };
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setMode(localStorage.theme);
    console.log(mode);
  }, [mode]);
  return (
    <>
      <Image
        src={mode == 'dark' ? lightMode : nightMode}
        alt="dark or light mode"
        width={35}
        height={35}
        onClick={changeTheme}
      />
      {/* {mode} */}
    </>
  );
}
