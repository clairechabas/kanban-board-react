export const metadata = {
  title: 'Kanban Board React',
  description: 'Learn React by building a Kanban Board',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
