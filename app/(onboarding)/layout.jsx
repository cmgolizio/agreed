import ThemeSwitch from "@/components/ui/ThemeSwitch";

export default function CustomLayout({ children }) {
  return (
    <main className='min-h-full h-full min-w-full w-full flex flex-col items-center justify-center p-3'>
      <ThemeSwitch />
      {children}
    </main>
  );
}
