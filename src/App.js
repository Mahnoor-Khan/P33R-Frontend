import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import SearchListPage from "./Components/SearchListPage/SearchListPage";
import ProductDetailPage from "./Components/ProductDetailsPage/ProductDetailPage";
import ProfilePage from "./Components/Profile/ProfilePage";
import GalleryImageViewer from "./Components/ProductDetailsPage/GalleryImageViewer";
import CheckoutAndPayment from "./Components/Checkout&Payment/CheckoutAndPayment";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="search" element={<SearchListPage />} />
          <Route path="productDetail" element={<ProductDetailPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="imageViewer" element={<GalleryImageViewer />} />
          <Route path="checkout" element={<CheckoutAndPayment />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
