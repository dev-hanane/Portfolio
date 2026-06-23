import './globals.css'

export const metadata = {
  title: 'Lucas Martin - Portfolio',
  description: 'Lucas Martin - Web Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
