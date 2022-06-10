import "./App.css";
import MainFooter from "./Components/Footer/MainFooter";
import SmallHeader from "./Components/Header1/SmallHeader";
import Header2 from "./Components/Header2/Header2";
import Header3 from "./Components/Header3/Header3";
import "swiper/css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import ProductDetails from "./Components/ProductDetail/ProductDetails";
import ProductSearchPage from "./Components/ProductSearchPage/ProductSearchPage";
import ContactUs from "./Components/ContactUs/ContactUs";
import UserCart from "./Components/UserCart/UserCart";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route
          path="/productSearch"
          element={<ProductSearchPage></ProductSearchPage>}
        ></Route>
        <Route
          path="/singleProduct"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
        <Route path="/cart" element={<UserCart />}></Route>
      </Routes>

      <MainFooter></MainFooter>
    </div>
  );
}

export default App;
