import React from "react";
import CartIcon from "../component/cart/CartIcon";
import ProductItem from "../component/Product/ProductItem";
import MainHeader from "./MainHeader";

const Home = (props) => {
  return (
    <div className="home">
      <MainHeader></MainHeader>
      <ProductItem />
    </div>
  );
};

export default Home;
