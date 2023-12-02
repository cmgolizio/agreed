"use client";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

import { AuthContext } from "@/contexts/AuthContext";
import LogoutBtn from "@/components/ui/LogoutBtn";

export default function Home() {
  const { currentUser } = useContext(AuthContext);

  const router = useRouter();

  // useEffect(() => {
  //   console.log("CURRENT PATHNAME: ", router.pathname);
  // }, [router.pathname]);

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
    }
    if (currentUser) {
      router.push("/categories");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);
  // if (!currentUser) router.push("/login");
  return (
    // <main className='flex min-h-screen h-screen min-w-screen w-screen flex-col items-center justify-start p-3 mt-48'>
    <main className='min-w-full flex flex-col justify-start items-center text-center mt-48'>
      {/* <h1 className='text-3xl text-[#7171ff] dark:text-[#6666D9] pb-10'> */}
      <LogoutBtn />
    </main>
  );
}
