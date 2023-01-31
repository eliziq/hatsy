import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as HatsyLogo } from "../../assets/shop-logo.svg";
import { signOutUser } from "../../util/firebase";
import { selectCurrentUser } from "../../store/user/userSelector";
import { selectIsCartOpen } from "../../store/cart/cartSelector";
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";

import {
  NavigationContainer,
  LogoContainer,
  TabsContainer,
  TabLink,
} from "./NavigationStyle.js";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <HatsyLogo />
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
