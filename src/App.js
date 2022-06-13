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
import UserWishList from "./Components/UserWishList/UserWishList";
import DashboardInfo from "./Components/UserWishList/DashboardInfo";
import PurchasedItems from "./Components/UserWishList/PurchasedItems";
import Deposit from "./Components/UserWishList/Deposit";
import Transactions from "./Components/UserWishList/Transactions";
import Withdraw from "./Components/UserWishList/Withdraw";
import OrderTracking from "./Components/UserWishList/OrderTracking";
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
        <Route path="/wishlist" element={<UserWishList />}>
          <Route index element={<DashboardInfo />}></Route>
          <Route path="purchasedItem" element={<PurchasedItems />}></Route>
          <Route path="deposit" element={<Deposit />}></Route>
          <Route path="transaction" element={<Transactions />}></Route>
          <Route path="withdraw" element={<Withdraw />}></Route>
          <Route path="orderTracking" element={<OrderTracking />}></Route>
        </Route>
      </Routes>

      <MainFooter></MainFooter>
    </div>
  );
}

export default App;
