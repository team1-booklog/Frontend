import { useLocation } from 'react-router-dom'
import Header from '../components/common/header/Header.tsx'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  const location = useLocation()

  const pageLocation =
    location.pathname === '/login' || location.pathname === '/register'

  return (
    <div>
      <Header isBordered={pageLocation} />
      <main className={`bg-white ${pageLocation ? '' : '-mt-4rounded-2xl'}`}>
        <Outlet />
      </main>
    </div>
  )
}
