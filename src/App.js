import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage.jsx';

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}
