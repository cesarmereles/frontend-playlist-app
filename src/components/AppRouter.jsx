import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterForm from "../components/RegisterForm";
import Login from "../components/Login";
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRouter;
