import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Navigation from "./routes/Navigation/Navigation";
import Authentication from "./routes/Authentication/Authentication";

const Shop = () => {
  return <h1>shop</h1>;
};

const App = () => {
  return (

      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index={true} element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<Authentication />} />
        </Route>
      </Routes>

  );
};

export default App;
