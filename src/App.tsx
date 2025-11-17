import { Routes, Route } from "react-router-dom";
import GlobalLayout from "./layout/GlobalLayout";
import Home from "./pages/Home";
import Subscribe from "./pages/Subscribe";
import Reward from "./pages/Reward";
import Request from "./pages/Request";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        <Route index element={<Home />} />
        <Route path="subscribe" element={<Subscribe />} />
        <Route path="reward" element={<Reward />} />
        <Route path="request" element={<Request />} />
        <Route path="mypage" element={<MyPage />} />
      </Route>
    </Routes>
  );
}

export default App;
