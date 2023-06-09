import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePages from "./pages/HomePages";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/productDetailsPage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/products/:catId" element={<ProductPage />} />
        <Route path="/products/detail/:id" element={<ProductDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
