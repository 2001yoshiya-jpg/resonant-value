import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import Home from './pages/Home';
import WatchLP from './pages/WatchLP';
import Dashboard from './pages/Dashboard';
import BrandLP from './pages/lp/BrandLP';
import GoldLP from './pages/lp/GoldLP';
import JewelryLP from './pages/lp/JewelryLP';
import CameraLP from './pages/lp/CameraLP';
import ApplianceLP from './pages/lp/ApplianceLP';
import AntiquesLP from './pages/lp/AntiquesLP';
import StampsLP from './pages/lp/StampsLP';
import SakeLP from './pages/lp/SakeLP';
import DishesLP from './pages/lp/DishesLP';
import FurnitureLP from './pages/lp/FurnitureLP';
// Add page imports here

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/watch" element={<WatchLP />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/brand" element={<BrandLP />} />
      <Route path="/gold" element={<GoldLP />} />
      <Route path="/jewelry" element={<JewelryLP />} />
      <Route path="/camera" element={<CameraLP />} />
      <Route path="/appliance" element={<ApplianceLP />} />
      <Route path="/antiques" element={<AntiquesLP />} />
      <Route path="/stamps" element={<StampsLP />} />
      <Route path="/sake" element={<SakeLP />} />
      <Route path="/dishes" element={<DishesLP />} />
      <Route path="/furniture" element={<FurnitureLP />} />
      {/* Add your page Route elements here */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App