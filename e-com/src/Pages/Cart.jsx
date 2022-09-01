import React, { useEffect } from "react";
import styles from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../Redux/action";
import axios from "axios";
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
              <div>
              <img src={ele.image_link} alt="" />
              </div>
              <div>
                <p>Brand : {ele.brand}</p>
                <p>Product Name : {ele.name}</p>
                <p>Price : {ele.price}</p>
                <button onClick={()=>{
                  axios.delete(`https://blueproduct.herokuapp.com/cartItem/${ele.id}`).then(()=>{
                    dispatch(getCart(data));
                  })
                }} >Delete</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Cart;
