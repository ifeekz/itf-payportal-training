import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from '@/pages/auth/Login'
import NotFoundErrorPage from '@/components/errors/NotFoundErrorPage'
import DashboardPage from './pages/admin/dashboard'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/admin" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}