import { useLocation } from 'react-router-dom'
import Header from '../components/common/header/Header.tsx'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  const location = useLocation()
  const isAuthPage =
    location.pathname === '/login' ||
    location.pathname === '/register' ||
    /^\/book\/.+/.test(location.pathname)

  return (
    <div>
      <Header isBordered={isAuthPage} />
      <main className={`bg-white ${!isAuthPage && '-mt-4 rounded-2xl'}`}>
        <Outlet />
      </main>
    </div>
  )
}
