import { Routes, Route, Navigate } from "react-router-dom";
import GlobalLayout from "./layout/GlobalLayout";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        <Route index element={<Navigate to="/main/home" replace />} />
        <Route path="main" element={<MainLayout />}>
          <Route path="home" element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
