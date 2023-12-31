"use client";
import React, { useContext } from "react";

import { AuthContext } from "@/contexts/AuthContext";

const LogoutBtn = () => {
  const { logout } = useContext(AuthContext);
  return (
    <button
      className='absolute top-8 left-8 text-lg bg-transparent'
      onClick={logout}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
