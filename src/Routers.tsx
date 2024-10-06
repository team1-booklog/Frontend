import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/_layout.tsx';
import MainPage from './pages/MainPage.tsx';
import MyPage from './pages/MyPage.tsx';

export default function Routers() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/mypage" element={<MyPage />} />
          </Route>

          <Route path="*" element={<h3><b>NOT FOUND PAGE</b></h3>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}