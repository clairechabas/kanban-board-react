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
  const isSidebarOpen = false

  return (
    <html lang="en">
      <body
        style={{
          minHeight: '100vh',
        }}
      >
        <ThemeProvider>
          <div
            style={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Header />

            <main
              style={{
                height: '100%',
                flexGrow: '1',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: isSidebarOpen ? '300px' : '0px',
              }}
            >
              <Sidebar boardNames={boardNames} />
              {children}
            </main>

            {/* <Modal /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
