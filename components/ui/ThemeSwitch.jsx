"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import IconButton from "./icon-button";

const ThemeSwitch = ({ styles }) => {
  const [isMounted, setIsMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  const handleChangeTheme = (e) => {
    e.preventDefault();

    setTheme(theme === "light" ? "dark" : "light");
  };

  const themes = {
    light: {
      src: "/sun.svg",
      alt: "light mode button",
      size: 50,
    },
    dark: {
      src: "/moon.svg",
      alt: "dark mode button",
      size: 50,
    },
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    // <div className={styles}>
    <div className='absolute top-2 right-2 m-3'>
      <IconButton
        iconDataObject={theme === "light" ? themes.dark : themes.light}
        styles='w-fit self-center'
        action={handleChangeTheme}
      />
    </div>
  );
};

export default ThemeSwitch;
