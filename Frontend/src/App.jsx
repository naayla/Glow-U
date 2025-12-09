import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SkinTypePage from "./pages/SkinTypePage";
import RecommendationsPage from "./pages/RecommendationPage";
import RoutinePage from "./pages/RoutinePage";
import TipsPage from "./pages/TipsPage";
import LoginPage from "./pages/LoginPage"; 
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<ProtectedRoute />}>
           <Route path="/" element={<LandingPage />} />
           <Route path="/skin-type" element={<SkinTypePage />} />
           <Route path="/recommendations" element={<RecommendationsPage />} />
           <Route path="/routine" element={<RoutinePage />} />
           <Route path="/tips" element={<TipsPage />} />
        </Route>

        <Route path="*" element={<div style={{textAlign:'center', padding:'5rem'}}>404 - Not Found</div>} />
      </Routes>
    </Router>
  );
}