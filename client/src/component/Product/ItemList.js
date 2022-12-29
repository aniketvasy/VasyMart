import React from "react";
import CartButton from "../cart/CartButton";
import './itemList.css'

const ItemList = (props) => {
  return (
    <div className="item-list">
      <div>
        <figure>
          <img className="item-img" src={props.src} alt="Item" />
        </figure>
      </div>
      <div className="title-price-grp">
        <h5 className="title">{props.title}</h5>
        <h5 className="price">MRP : {props.price} INR</h5>
        <CartButton ItemList={props}/>
      </div>
    </div>
  );
};

export default ItemList
