import Background from '@/components/Background'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DevLinks',
  description: 'Seu agregador de links para usar como cartão de visitas online!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" id='htmlHidrate' >
      <body className={`${inter.className} dark:bg-gradient-to-b dark:from-gray-950 dark:to-gray-800 dark:text-white max-w-screen min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
