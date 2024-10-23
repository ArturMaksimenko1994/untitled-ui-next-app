export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="body">
        <main className="main">{children}</main>
      </body>
    </html>
  )
}