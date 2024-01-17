import './globals.css'
import Header from "@/src/components/header/header";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
      <title>Bac A Sable Next</title>
    </head>
      <body>
      <div className="flex flex-col px-80 py-10 h-screen">
        <Header />
        {children}
      </div>
      </body>
    </html>
  )
}
