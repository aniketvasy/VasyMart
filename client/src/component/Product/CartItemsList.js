import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-Slice";
import swal from "sweetalert";

const CartItemsList = (props) => {
  const dispatch = useDispatch();
  const [click, setClick] = useState();
  // const item = useSelector((state) => state.cart);
  // const { itemsList, totalQuantity, totalPrice } = item;
  const { id, title, price, src } = props;

  const plusToCart = (event) => {
    // const id = event.target.id;
    setClick((current) => !current);
    dispatch(cartActions.addItemToCart({ id, title, price, src }));
    //    setQty(qty + 1)
  };
  const minusToCart = (event) => {
    setClick((current) => !current);
    dispatch(cartActions.removeItemFromCart(id));
    // console.log(Itemslist)
    // setQty(qty - 1)
  };

  const removeProductHandler = (event) => {
    setClick((current) => !current);
    checkout();
    // dispatch(cartActions.replaceCart(id))
  };

  const checkout = (event) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will have to add it again!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Item is removed from cart succesfully :)", {
          icon: "success",
        });
        dispatch(cartActions.replaceCart(id));
      } else {
        //   swal("Your imaginary file is safe!");
      }
    });
  };

  return (
    <div className="cart-wrapper">
      <li className="cart-product">
        <img className="item-img" src={props.src} alt="Product" />
        {/* {item.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
        <div className="cart-product-details">
          <p>{props.title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>
            Quantity :{" "}
            <button
              type="submit"
              id="plus"
              onClick={minusToCart}
              className="cart-Min-btn"
              //   disabled={qty >= 5}
            >
              <span>-</span>
            </button>{" "}
            <strong>{props.quantity}</strong>
            <button
              type="submit"
              id="plus"
              onClick={plusToCart}
              className="cart-Min-btn"
              disabled={props.quantity >= 5}
            >
              <span>+</span>
            </button>
          </p>
          <p>Price : {props.price} &#8377;</p>
          <h4>Total Price : {props.quantity * props.price} &#8377;</h4>
          <button
            className="cartMin-btn"
            type="submit"
            onClick={removeProductHandler}
          >
            Remove
          </button>
        </div>
      </li>
    </div>
  );
};

export default CartItemsList;
