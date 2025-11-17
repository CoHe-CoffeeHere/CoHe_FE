import { Routes, Route } from "react-router-dom";
import GlobalLayout from "./layout/GlobalLayout";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
