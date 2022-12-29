import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./CartHover.css";
const CartHover = (props) => {
    const history = useHistory()
  const item = useSelector((state) => state.cart);
  const { itemsList, totalQuantity, totalPrice } = item;
  console.log(item);
//   console.log(itemsList.map((item) => item.name));
  console.log(itemsList);
  let a = [];
  if (itemsList.length > 2) {
    for (let i = 0; i <= itemsList.length - 2; i++) {
      a.push(itemsList[i]);
      console.log(itemsList, "looooopppp", a);
    }
  } else {
    a = itemsList;
  }
  let nu;
  if (a.length > 2) {
    let no = a.length - 2;
    nu = no;
  }

  console.log(itemsList);
  const ItmList = a.map((item) => (
    <li>
      {item.name} &nbsp;&nbsp;&nbsp;&nbsp;
      <strong>
        ({item.price}(INR)*{item.quantity})
      </strong>
    </li>
  ));
  // }

  const cart = ()=> {
    console.log('clicked    ')
    let path = '/cart'
    history.push(path)
}

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
        <h4>Total Amount : {totalPrice} </h4>
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
