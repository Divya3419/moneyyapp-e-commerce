import React, { useEffect } from "react";
import styles from "./Common.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../Redux/action";
const Cart = () => {
  const data = useSelector((state) => state.item);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart(data));
  }, []);
  

  return (
    <div className={styles.container}>
      {data.length > 0 &&
        data.map((ele) => {
          return (
            <div className={styles.card} key={ele.id}>
              <img src={ele.image_link} alt="" />
              <div>
                <p>Brand : {ele.brand}</p>
                <p>Product Name : {ele.name}</p>
                <p>Price : {ele.price}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Cart;
