import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { Home } from './pages/Home';
import { VehicleDetail } from './pages/VehicleDetail';
import { ScrollToTop } from './components/ScrollToTop';
import { Login } from './pages/admin/Login';
import { ProtectedRoute } from './components/admin/ProtectedRoute';
import { AdminLayout } from './components/admin/AdminLayout';
import { Dashboard } from './pages/admin/Dashboard';
import { Inventory } from './pages/admin/Inventory';
import { VehicleForm } from './pages/admin/VehicleForm';

function App() {
  return (
    <BrowserRouter>
      {/* ScrollToTop to ensure we start at top when navigating */}
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-gray-900 relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicle/:id" element={<VehicleDetail />} />

          <Route path="/login" element={<Login />} />

          <Route path="/admin" element={<ProtectedRoute />}>
            <Route element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="inventory" element={<Inventory />} />
              <Route path="add" element={<VehicleForm />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
