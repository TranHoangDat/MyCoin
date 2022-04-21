import HomeHeader from "./components/home/HomeHeader";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<HomePage />} exact />
      <Route path="/wallet/dashboard" element={<DashboardPage />} /> */}
      <Route path="/" element={<DashboardPage />} exact />
    </Routes>
  );
}

export default App;
