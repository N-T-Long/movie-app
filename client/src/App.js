import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./components/auth/Login";
import Footer from "./components/layout/Footer";
import Headers from "./components/layout/Header";
import HomePage from "./page/Home";
import Profile from "./page/Profile";

function App() {
  return (
    <div className="App">
      <Headers />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="nguoi-dung" element={<Profile />} />
        <Route path="dang-nhap" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
