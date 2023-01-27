import "./Navigation.scss";
import { ReactComponent as HatsyLogo } from "../../assets/shop-logo.svg";
import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import { signOutUser } from "../../util/firebase";
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
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
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
