import React from "react";
import { useSelector } from "react-redux";
// import { AiOutlineShoppingCart } from "react-icons/ai";
import "./cartIcon.css";
import CartHover from "./CartHover";
import { useHistory } from "react-router-dom";

const CartIcon = (props) => {
  const history = useHistory();

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const cart = () => {
    let path = "/cart";
    history.push(path);
  };

  return (
    <React.Fragment>
      <div className="cart-wrapper">
        <p onClick={() => history.push("/")}> Home</p>
        <span className="cart-anchor">
          {/* <AiOutlineShoppingCart/> */}
          <div className="cart-icon" onClick={cart}>
            {totalQuantity === 0 ? (
              ""
            ) : (
              <span className="header-span">{totalQuantity}</span>
            )}
          </div>
        </span>
        <CartHover />
        Contact Us
      </div>
    </React.Fragment>
  );
};

export default CartIcon;
