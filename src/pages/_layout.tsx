import Header from '../components/common/header/Header.tsx';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <Header />
      <main className='-mt-4 bg-white rounded-2xl'>
        <Outlet />
      </main>
    </div>
  );
}