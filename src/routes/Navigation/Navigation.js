import { ReactComponent as HatsyLogo } from "../../assets/shop-logo.svg";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { signOutUser } from "../../util/firebase";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";

import {
  NavigationContainer,
  LogoContainer,
  TabsContainer,
  TabLink,
} from "./NavigationStyle.js";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <HatsyLogo/>
        </LogoContainer>
        <TabsContainer>
          <TabLink to="/shop">SHOP</TabLink>
          {currentUser ? (
            <TabLink as="span" onClick={signOutUser}>
              SIGN OUT
            </TabLink>
          ) : (
            <TabLink to="/sign-in">SIGN IN</TabLink>
          )}
          <CartIcon />
        </TabsContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
