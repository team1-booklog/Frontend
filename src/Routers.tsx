import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './pages/_layout.tsx';
import MainPage from './pages/MainPage.tsx';
import MyPage from './pages/MyPage.tsx';
import Login from './pages/Login.tsx';

export default function Routers() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <MainPage /> },
        { path: '/mypage', element: <MyPage /> },
        { path: '/login', element: <Login /> },
      ],
    },
    {
      path: '*',
      element: (
        <h3>
          <b>NOT FOUND PAGE</b>
        </h3>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}
