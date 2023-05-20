import Header from '@/components/Header/Header'
import Sidebar from '@/components/Sidebar/Sidebar'
import ThemeProvider from '@/theme/ThemeProvider'

export const metadata = {
  title: 'Kanban Board React',
  description: 'Learn React by building a Kanban Board',
}

const boardNames = ['Board 1', 'Board 2', 'Board 3']

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />

          <main>
            <Sidebar boardNames={boardNames} />
            {children}
          </main>

          {/* <Modal /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
