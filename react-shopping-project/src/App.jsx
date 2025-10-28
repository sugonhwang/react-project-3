import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./component/Navbar";

// 1. 전체 상품 페이지, 로그인, 상품 페이지
// 1-1 Navigation Bar 만들기
// 2. 전체 상품 페이지에서는 전체 상품을 볼 수 있음
// 3. 로그인 버튼을 누르면 로그인 페이지가 나옴
// 4. 상품 디테일을 눌었을 때 로그인이 안되어 있으면 로그인 페이지가 나옴
// 5. 로그인이 되어 있으면 상품 디테일을 누르면 디테일 페이지가 나옴
// 6. 로그아웃을 누르면 로그아웃이 됨
// 7. 상품 디테일 페이지에서 로그아웃을 누르면 디테일 페이지를 볼 수 없음 -> 로그인 페이지로 이동
// 8. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보임
// 9. 상품을 검색할 수 있음

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
