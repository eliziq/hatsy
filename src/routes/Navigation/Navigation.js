import "./Navigation.scss";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as HatsyLogo } from "../../assets/shop-logo.svg";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <HatsyLogo className="logo" />
        </Link>
        <div className="tabs-container">
          <Link className="tab" to="/shop">
            SHOP
          </Link>
          <Link className="tab" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
