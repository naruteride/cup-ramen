import './globals.css'
import { Inter } from 'next/font/google';

import Navigator, {NavigatorBackground} from './component/Navigator';
import Header from './component/Header';

const inter = Inter({ subsets: ['latin'] })
                 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="ko">
      <body className={inter.className + ' relative flex flex-col sm:grid w-screen h-screen'}>
        <Navigator></Navigator>
        <Header></Header>
        {children}
        <NavigatorBackground></NavigatorBackground>
      </body>
    </html>
  )
}
