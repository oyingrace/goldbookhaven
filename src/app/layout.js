import { Poppins } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/context/ThemeContext'
import Footer from '@/components/Footer'

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700'],
  display: 'swap'
})

export const metadata = {
  title: 'GoldsBookHaven',
  description: 'Become a better version of yyourself through books',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <ThemeProvider>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}