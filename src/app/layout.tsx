import "./css/globals.css"

export const metadata = {
  title: "AI Governance Platform",
  description: "Dashboard",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#f5f5f7] text-[#1d1d1f] antialiased">
        {children}
      </body>
    </html>
  )
}