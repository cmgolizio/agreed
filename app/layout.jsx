import { Inter } from "next/font/google";
import "./globals.css";

import AuthProvider from "@/contexts/AuthContext";
import ThemeProvider from "./theme-provider";
import ThemeSwitch from "@/components/ui/ThemeSwitch";
import LogoutBtn from "@/components/ui/LogoutBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AGREED",
  description: "What can you and a friend agree on? Find out here!",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='flex min-h-screen h-screen min-w-screen w-screen flex-col items-center justify-center p-3'>
          <ThemeProvider>
            <AuthProvider>
              <ThemeSwitch />
              <LogoutBtn />
              {children}
            </AuthProvider>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
