import Sidebar from './Sidebar.jsx'
import Header from './Header.jsx'

export default function Layout({ children }) {
  return (
    <div className="bg-background font-body-md text-on-surface antialiased">
      <Sidebar />
      <div className="pl-72">
        <Header />
        <main className="w-full pt-16 bg-surface min-h-screen">
          <div className="w-full px-gutter-desktop py-space-lg">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
