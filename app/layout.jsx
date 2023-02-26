import './globals.css'

export const metadata = {
  title: 'Movie-App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='mx-32 bg-blue-200'>{children}</body>
    </html>
  )
}