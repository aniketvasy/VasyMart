// import { iteratorSymbol } from "immer/dist/internal";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MainHeader from "../../layout/MainHeader";
import CartItemsList from "../Product/CartItemsList";
import { cartActions } from "../../store/cart-Slice";
import swal from "sweetalert";
import "./Cart.css";
import { useHistory } from "react-router-dom";

const Cart = (props) => {
  const item = useSelector((state) => state.cart);
  const { itemsList, totalQuantity, totalPrice } = item;
  const history = useHistory();
  const dispatch = useDispatch();

  const orderDone = () => {
    swal({
      title: "Order Confirmation:)",
      text: "Do you want to confirm order ?",
      icon: "info",
      buttons: true,
      // dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal(`Your order is succesfully placed with VasyMart:)`, {
          icon: "success",
          title: `OrderId: ${Date.now()}`,
        });
        dispatch(cartActions.newCart());
        history.push("/");
      } else {
        //   swal("Your imaginary file is safe!");
      }
    });
  };

  const ItmList = itemsList.map((item) => (
    <CartItemsList
      key={item.id}
      id={item.id}
      title={item.name}
      price={item.price}
      src={item.src}
      quantity={item.quantity}
    />
  ));

  return (
    <React.Fragment>
      <div className="c-head">
        <MainHeader />
        <h3 className="cart head">&nbsp;&nbsp;My Cart ({totalQuantity})</h3>
        <main className="checkout-main">
          <div className="cart">
            {itemsList.length > 0 ? (
              ItmList
            ) : (
              <h2>&nbsp;&nbsp; Ooop's... its feels so light :( &nbsp;&nbsp;</h2>
            )}
          </div>
          <section className="cout-sec">
            <h3 className="cart">Payment Details</h3>
            <p className="cart">
              Total Amount = {totalPrice.toFixed(2)} &#8377;
            </p>
            <div className="cart-btn">
              {itemsList.length && (
                <button
                  className="addCart-btn"
                  type="submit"
                  onClick={orderDone}
                >
                  Proceed to Checkout
                </button>
              )}
            </div>
          </section>
        </main>
      </div>
    </React.Fragment>
  );
};

export default Cart;

// <div className="cart-wrapper">
// <li className="cart-product">
//   <img className="item-img" src={item.src} alt="Product" />
//   {/* {item.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
//   <div className="cart-product-details">
//     <p>{item.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
//     <p>
//       Quantity :{" "}
//       <button
//         type="submit"
//         id="plus"
//         //   onClick={plusToCart}
//         className="cart-Min-btn"
//         //   disabled={qty >= 5}
//       >
//         <span >-</span>
//       </button>{" "}
//       <strong>{item.quantity}</strong>
//       <button
//         type="submit"
//         id="plus"
//         //   onClick={plusToCart}
//         className="cart-Min-btn"
//         //   disabled={qty >= 5}
//       >
//         <span >+</span>
//       </button>
//     </p>
//     <p>Price : {item.price} &#8377;</p>
//     <h4>Total Price : {item.quantity * item.price} &#8377;</h4>
//   </div>
// </li>
// </div>
