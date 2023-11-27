// This is the main styling page, you can also create separate layout files

import { Inter } from 'next/font/google'
import './globals.css'
import { Poppins } from 'next/font/google' // here you can directly import fonts
import Header from './components/header'

const inter = Inter({ subsets: ['latin'] })

// desctructure fonts 
const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
})
 
export const metadata = {
  title: 'Philippe Ducasse NextJS app',
  description: 'Web Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* sets the font for the whole project to poppins */}
      <body className= {poppins.className}>
        <Header />
        <main className='container'>{children}</main>
      </body>
    </html>
  )
}
