import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { checkUserSession } from "./store/user/userAction";
import { fetchCategoriesStart } from "./store/categories/categoryAction";

import Navigation from "./routes/Navigation/Navigation";
import Spinner from "./components/Spinner/Spinner";
import "./App.scss";

const Home = lazy(() => import("./routes/Home/Home"));
const Shop = lazy(() => import("./routes/Shop/Shop"));
const Checkout = lazy(() => import("./routes/Checkout/Checkout"));
const Authentication = lazy(() =>
  import("./routes/Authentication/Authentication")
);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index={true} element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="sign-in" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
