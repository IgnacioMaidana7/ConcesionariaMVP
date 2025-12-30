import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { Home } from './pages/Home';
import { VehicleDetail } from './pages/VehicleDetail';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      {/* ScrollToTop to ensure we start at top when navigating */}
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-gray-900 relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicle/:id" element={<VehicleDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
