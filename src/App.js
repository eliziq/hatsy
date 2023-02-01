import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import {
  onAuthStateChangedListener,
  createUserDocFromAuth,
  getCategoriesAndDocuments,
} from "./util/firebase";

import { setCurrentUser } from "./store/user/userAction";
import { fetchCategoriesAsync } from "./store/categories/categoryAction";

import Home from "./routes/Home/Home";
import Navigation from "./routes/Navigation/Navigation";
import Authentication from "./routes/Authentication/Authentication";
import Shop from "./routes/Shop/Shop";
import Checkout from "./routes/Checkout/Checkout";
import "./App.scss";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
    const unsubscribe = onAuthStateChangedListener((user) => {
      //it will be either null or a user object
      if (user) {
        createUserDocFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);

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
