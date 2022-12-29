import React from "react";
import CartIcon from "../component/cart/CartIcon";
import "./mainHeader.css";

const MainHeader = (props) => {
  return (
    <header>
      {/* <h1>VasyMart</h1> */}
      <nav>
        <h3>VasyMart</h3>
        <CartIcon></CartIcon>
      </nav>
    </header>
  );
};

export default MainHeader;
