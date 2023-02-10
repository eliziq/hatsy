import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOutStart } from "../../store/user/userAction";
import { ReactComponent as HatsyLogo } from "../../assets/shop-logo.svg";
import { selectCurrentUser } from "../../store/user/userSelector";
import { selectIsCartOpen } from "../../store/cart/cartSelector";
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";

import {
  NavigationContainer,
  LogoContainer,
  TabsContainer,
  TabLink,
} from "./NavigationStyle";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const signOutHandler = () => dispatch(signOutStart());

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <HatsyLogo />
        </LogoContainer>
        <TabsContainer>
          <TabLink to="/shop">SHOP</TabLink>
          {currentUser ? (
            <TabLink as="span" onClick={signOutHandler}>
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
