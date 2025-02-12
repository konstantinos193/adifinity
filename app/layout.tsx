import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'adinfinity',
  description: 'Μετατρέπουμε Ιδέες σε Επιτυχίες!',
  openGraph: {
    type: 'website',
    url: 'https://yourwebsite.com',
    title: 'adinfinity',
    description: 'Μετατρέπουμε Ιδέες σε Επιτυχίες!',
    image: 'https://i.postimg.cc/2SygFYcf/Untitled-design-28.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="el">
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adinfinity.gr" />
        <meta property="og:title" content="adinfinity" />
        <meta property="og:description" content="Μετατρέπουμε Ιδέες σε Επιτυχίες!" />
        <meta property="og:image" content="https://i.postimg.cc/2SygFYcf/Untitled-design-28.png" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

