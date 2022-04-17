import HomeHeader from "./components/home/HomeHeader";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} exact />
    </Routes>
  );
}

export default App;
