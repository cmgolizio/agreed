"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { AuthContext } from "@/contexts/AuthContext";
import { useForm } from "@/hooks/useForm";

const initialValues = {
  email: "",
  password: "",
};

export default function Login() {
  const router = useRouter();
  const { login } = useContext(AuthContext);
  const handleLogin = async (values) => {
    const { email, password } = values;

    await login(email, password);

    return router.push("/");
  };
  const { values, handleChange, handleSubmit } = useForm(initialValues, () =>
    handleLogin(values)
  );

  const { email, password } = values;
  return (
    <form
      // onSubmit={handleSubmit}
      action={handleSubmit}
      // method='POST'
      // onChange={(e) => handleChange(e)}
      className='h-1/2 w-5/6 p-7 bg-transparent dark:shadow-darkMode shadow-lightMode flex flex-col content-center justify-evenly rounded-xl'
    >
      <h1 className='text-2xl text-center'>Sign In</h1>
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
      <button
        type='submit'
        className='py-2 rounded-lg disabled:bg-[#9090ff] bg-[#7171ff] text-ghostW disabled:dark:bg-[#6666D9] dark:bg-[#5454da] dark:text-nearBlack'
        disabled={!email ? true : !password ? true : false}
      >
        Sign In
      </button>
      <p className='text-sm text-center'>
        {"Don't have an account? "}
        <span>
          <Link className='underline text-sm' href='/signup'>
            Sign up
          </Link>
        </span>
      </p>
    </form>
  );
}
