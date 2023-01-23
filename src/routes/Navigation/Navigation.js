import "./Navigation.scss";
import { ReactComponent as HatsyLogo } from "../../assets/shop-logo.svg";
import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { signOutUser } from "../../util/firebase";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
          {currentUser ? (
            <span className="tab" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="tab" to="/sign-in">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
