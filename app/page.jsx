"use client";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

import { AuthContext } from "@/contexts/AuthContext";
import AuthLink from "@/components/ui/AuthLink";

export default function Home() {
  const { currentUser, logout } = useContext(AuthContext);

  const router = useRouter();

  // useEffect(() => {
  //   console.log("CURRENT USER: ", currentUser);
  // }, [currentUser]);
  if (!currentUser) router.push("/login");
  return (
    <main className='flex min-h-screen h-screen min-w-screen w-screen flex-col items-center justify-center p-3'>
      <h1 className='text-3xl'>Categories</h1>
      <AuthLink type={{ title: "Movies", href: "/movies" }} styles='text-2xl' />
    </main>
  );
}
