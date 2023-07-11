


import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/components/navbar/Navbar';

import RegisterModal from '@/app/components/modals/RegisterModal';


import ClientOnly from './components/ClientOnly';




export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

const font = Nunito({ 
  subsets: ['latin'], 
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
        
        
          <RegisterModal />
         
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}