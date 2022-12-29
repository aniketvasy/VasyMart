import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import axios from "axios";
import "./productItem.css";

const ProductItem = (props) => {
  const [itmData, setItmData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  // const url = "https://api.escuelajs.co/api/v1/products";

  useEffect(() => {
    const itemData = async () => {
      const items = await axios("https://fakestoreapi.com/products/");
      // .then(res=>res.json())
      const res = await items.data;
      console.log(res);
      if (!res) {
        throw new Error("Something went wrong!");
      }
      setItmData(res);
      setIsLoading(false);
      // console.log(res);
    };
    itemData().catch((err) => {
      setIsLoading(false);
      setHttpError(err.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className="EmpLoading">
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className="EmpError">
        <p>{httpError}</p>
      </section>
    );
  }

  const ItmList = itmData.map((item) => (
    <ItemList
      src={item.image}
      title={item.title}
      des={item.description}
      price={+item.price.toFixed(2)}
      cat={item.category}
      rate={item.rating}
      id={item.id}
      key={item.id}
    />
  ));

  return <div className="product-item">{ItmList}</div>;
};

export default ProductItem;
