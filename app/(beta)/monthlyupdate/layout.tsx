export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          {/*<Navbar />*/}
          {children}
          {/*<Footer />*/}
{/*          <Analytics />
          <SpeedInsights />*/}
        </main>
      </body>
    </html>
  )
}
