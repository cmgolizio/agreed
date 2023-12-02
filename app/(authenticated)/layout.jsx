import ThemeSwitch from "@/components/ui/ThemeSwitch";
import LogoutBtn from "@/components/ui/LogoutBtn";

export default function MainLayout({ children }) {
  return (
    <main className='min-h-full h-full min-w-full w-full flex flex-col items-center justify-start mt-48 text-center p-3'>
      <LogoutBtn />
      <ThemeSwitch />
      {children}
    </main>
  );
}
