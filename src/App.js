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
import FavoriteSeller from "./Components/UserWishList/FavoriteSeller";
import Message from "./Components/UserWishList/Message";
import EditProfile from "./Components/UserWishList/EditProfile";
import ResetPassword from "./Components/UserWishList/ResetPassword";
import Packages from "./Components/UserWishList/Packages";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import axios from "axios";

import { TokenService } from "./Services/Storage.service.js";
import ApiService from "./Services/api.service.js";
function App() {
  const baseURL = "https://api.eazzycard.com/";
  axios.defaults.baseURL = baseURL;

  if (TokenService.getToken()) {
    ApiService.setHeader();
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/productSearch"
          element={<ProductSearchPage></ProductSearchPage>}
        ></Route>
        <Route
          path="/singleProduct"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route path="/contact" element={<ContactUs></ContactUs>}></Route>

        {TokenService.getToken() && (
          <>
            <Route path="/cart" element={<UserCart />}></Route>
          </>
        )}
        <Route path="/wishlist" element={<UserWishList />}>
          <Route index element={<DashboardInfo />}></Route>
          <Route path="purchasedItem" element={<PurchasedItems />}></Route>
          <Route path="deposit" element={<Deposit />}></Route>
          <Route path="transaction" element={<Transactions />}></Route>
          <Route path="withdraw" element={<Withdraw />}></Route>
          <Route path="orderTracking" element={<OrderTracking />}></Route>
          <Route path="favoriteSellers" element={<FavoriteSeller />}></Route>
          <Route path="message" element={<Message />}></Route>
          <Route path="editProfile" element={<EditProfile />}></Route>
          <Route path="resetPassword" element={<ResetPassword />}></Route>
          <Route path="packages" element={<Packages />}></Route>
        </Route>
      </Routes>

      <MainFooter></MainFooter>
      <ToastContainer />
    </div>
  );
}

export default App;
