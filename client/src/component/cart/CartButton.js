import { current } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-Slice";
import "./CartButton.css";

const CartButton = (props) => {
    const [qty,setQty] = useState(1)
  const [click, setClick] = useState(false);
  const [btn, setBtn] = useState(false)
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const Itemslist = useSelector((state)=> state.cart.itemsList)
    // console.log(props.Itemslist)>
    const cart =  useSelector((state)=> state.cart)
    const  {itemsList} = cart
    // console.log(itemsList )
    // console.log(props)
const {title, price, id, src } = props.ItemList



  const addToCart = (event) => {
    
    setBtn(true)
    // const id = event.target.id;
    // console.log(id);
    dispatch(cartActions.addItemToCart({id,title,price,src}));
    setClick(current => !current);
    setQty(1)
  };

  const plusToCart = (event) => {
    // const id = event.target.id;
    setClick(current => !current);
    dispatch(cartActions.addItemToCart({id,title,price, src}));
   setQty(qty + 1)
  }
  const minusToCart = (event) => {
    setClick(current => !current);
    dispatch(cartActions.removeItemFromCart(id));
    // console.log(Itemslist)
    setQty(qty - 1)
  };

  if (btn && qty > 0) {
    console.log(click, "vvvvvv");
    return (
      <div className="cart-btn">
        <button
          type="submit"
          id="minus"
          onClick={minusToCart}
          className="cartMin-btn"
        >
          <span id="minus" className="cartMin-btn">
            -
          </span>
        </button>
        <span className="qnt">{qty}</span>
        <button
          type="submit"
          id="plus"
          onClick={plusToCart}
          className="cartMin-btn"
          disabled={qty >= 5}
        >
          <span id="plus" className="cartMin-btn">
            +
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="cart-btn">
      <button type="submit" onClick={addToCart} className="addCart-btn">
        <span className="cart-btn-text">Add to Cart</span>
        <span className="cartPlus-btn">+</span>
      </button>
    </div>
  );
};

export default CartButton;
