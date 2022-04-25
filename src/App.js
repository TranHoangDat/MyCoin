import HomeHeader from "./components/home/HomeHeader";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import DashboardMain from "./components/dashboard/main/DashboardMain";
import DashboardTransaction from "./components/dashboard/transaction/DashboardTransaction";
import TransactionDetail from "./components/dashboard/transaction/TransactionDetail";
import DashboardSendSection from "./components/dashboard/send-section/DashboardSendSection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} exact />
      <Route element={<DashboardPage />}>
        <Route path="/wallet/dashboard/main" element={<DashboardMain />} />
        <Route
          path="/wallet/dashboard/send"
          element={<DashboardSendSection />}
        />
        <Route
          path="/wallet/dashboard/transactions"
          element={<DashboardTransaction />}
        />
        <Route
          path="/wallet/dashboard/transaction/:id"
          element={<TransactionDetail />}
        />
      </Route>
    </Routes>
  );
}

export default App;
