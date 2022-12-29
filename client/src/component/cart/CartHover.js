import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./CartHover.css";
const CartHover = (props) => {
  const history = useHistory();
  const item = useSelector((state) => state.cart);
  const { itemsList, totalQuantity, totalPrice } = item;

  let a = [];
  if (itemsList.length > 2) {
    for (let i = 0; i < 2; i++) {
      a.push(itemsList[i]);
    }
  } else {
    a = itemsList;
  }

  const ItmList = a.map((item) => (
    <li>
      {item.name} &nbsp;&nbsp;&nbsp;&nbsp;
      <strong>
        ({item.price}(INR)*{item.quantity})
      </strong>
    </li>
  ));
  // }

  const cart = () => {
    let path = "/cart";
    history.push(path);
  };

  return (
    <div className="btn btn-primary tooltip" onClick={cart}>
      Cart
      <div className="bottom">
        <h3>
          Order Summary:<p>{totalQuantity} item(s)</p>
        </h3>
        <p>{ItmList}</p>
        {itemsList.length > 2 ? (
          <h6>+{itemsList.length - 2} more Items</h6>
        ) : (
          ""
        )}
        <i></i>
        <h4>Total Amount : {+totalPrice.toFixed(2)} </h4>
        {/* <div>
            <button type="submit">
                Proceed to Cart
            </button>
        </div> */}
      </div>
    </div>
  );
};

export default CartHover;
