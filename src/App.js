import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { checkUserSession } from "./store/user/userAction";
import { fetchCategoriesStart } from "./store/categories/categoryAction";

import Home from "./routes/Home/Home";
import Navigation from "./routes/Navigation/Navigation";
import Authentication from "./routes/Authentication/Authentication";
import Shop from "./routes/Shop/Shop";
import Checkout from "./routes/Checkout/Checkout";
import "./App.scss";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="sign-in" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
