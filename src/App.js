import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import DashboardMain from "./components/dashboard/main/DashboardMain";
import DashboardTransaction from "./components/dashboard/transaction/DashboardTransaction";
import TransactionDetail from "./components/dashboard/transaction/TransactionDetail";
import DashboardPendingTransaction from "./components/dashboard/pending-transaction/DashboardPendingTransaction";
import DashboardSendSection from "./components/dashboard/send-section/DashboardSendSection";
import DashboardBlockchain from "./components/dashboard/block-chain/DashboardBlockchain";
import { MainContext } from "./contexts/MainContext";
import { useState } from "react";
import { BlockchainService } from "./services/blockchain.service";
import PrivateRoute from "./routers/PrivateRoute";

function App() {
  const [blockchainService, setBlockchainService] = useState();

  const handleSetWallet = wallet => {
    setBlockchainService(new BlockchainService(wallet));
  };

  return (
    <MainContext.Provider value={{ blockchainService, handleSetWallet }}>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route element={<PrivateRoute />}>
          <Route element={<DashboardPage />}>
            <Route path="/wallet/dashboard/main" element={<DashboardMain />} />
            <Route
              path="/wallet/dashboard/blockChain"
              element={<DashboardBlockchain />}
            />
            <Route
              path="/wallet/dashboard/send"
              element={<DashboardSendSection />}
            />
            <Route
              path="/wallet/dashboard/transactions"
              element={<DashboardTransaction />}
            />
            <Route
              path="/wallet/dashboard/pendingTransactions"
              element={<DashboardPendingTransaction />}
            />
            <Route
              path="/wallet/dashboard/transaction/:id"
              element={<TransactionDetail />}
            />
          </Route>
        </Route>
      </Routes>
    </MainContext.Provider>
  );
}

export default App;
