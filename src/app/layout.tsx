"use client";

import './globals.css'
import { Inter } from 'next/font/google';
import { useState } from "react";

import Navigator from './component/Navigator';
import Header from './component/Header';

const inter = Inter({ subsets: ['latin'] })
                 
export interface activateMenuProps {
  activateMenu: boolean;
  setActiveMenu: (active: boolean) => void;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <html lang="ko">
      <body className={inter.className + ' relative flex flex-col sm:grid w-screen h-screen'}>
        <Navigator activateMenu={activeMenu} setActiveMenu={setActiveMenu}></Navigator>
        <Header activateMenu={activeMenu} setActiveMenu={setActiveMenu}></Header>
        {children}
      </body>
    </html>
  )
}
