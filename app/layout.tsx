import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import MainNav from '@/components/MainNav'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'TekTik',
  description: 'Ticket issuing and management app for technical issues',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <nav className='flex flex-col items-center border-b mb-5 px-5 py-3'>
          <div className='max-w-6xl w-full'>
            <MainNav />
          </div>
        </nav>
        <main className='flex flex-col items-center'>
          <div className='max-w-6xl w-full'>
            {children}
          </div>       
        </main>  
      </body>
    </html>
  )
}
