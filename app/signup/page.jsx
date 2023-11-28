"use client";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { AuthContext } from "@/contexts/AuthContext";
import { useForm } from "@/hooks/useForm";

const initialValues = {
  name: "",
  username: "",
  email: "",
  password: "",
  password2: "",
};

export default function Signup() {
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();

  const { signup } = useContext(AuthContext);

  const handleSignup = async (values) => {
    const { email, password, username } = values;

    await signup(email, password, username);

    return router.push("/");
  };

  const { values, handleSubmit, handleChange } = useForm(initialValues, () =>
    handleSignup(values)
  );

  const { name, username, email, password, password2 } = values;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    // <div className='w-full h-4/5 mx-2 p-5 bg-transparent shadow-2xl shadow-ghostW dark:shadow-nearBlack flex flex-col content-center justify-between justify-items-center self-center'>
    <form
      // onSubmit={handleSubmit}
      action={handleSubmit}
      // method='POST'
      // onChange={(e) => handleChange(e)}
      className='h-3/5 w-5/6 p-7 bg-transparent dark:shadow-darkMode shadow-lightMode flex flex-col content-center justify-evenly rounded-xl'
    >
      <h1 className='text-2xl text-center'>Sign Up</h1>
      {/* <input
        onChange={(e) => handleChange(e)}
        id='input'
        name='name'
        type='text'
        placeholder='Full Name'
        value={name}
      /> */}
      <input
        onChange={(e) => handleChange(e)}
        id='input'
        name='username'
        type='text'
        placeholder='Username'
        value={username}
      />
      <input
        onChange={(e) => handleChange(e)}
        id='input'
        name='email'
        type='email'
        placeholder='Email'
        value={email}
      />
      <input
        onChange={(e) => handleChange(e)}
        id='input'
        name='password'
        type='password'
        placeholder='Password'
        value={password}
      />
      <input
        onChange={(e) => handleChange(e)}
        id='input'
        name='password2'
        type='password'
        placeholder='Confirm Password'
        value={password2}
      />
      <button
        type='submit'
        className='py-2 rounded-lg bg-[#9090ff] text-ghostW dark:bg-[#6666D9] dark:text-nearBlack'
      >
        Create Account
      </button>
      <p className='text-sm text-center'>
        Already have an account?{" "}
        <span>
          <Link className='underline text-sm' href='/login'>
            Log in
          </Link>
        </span>
      </p>
    </form>
  );
}
