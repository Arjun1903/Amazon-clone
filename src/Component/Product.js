import React,{useState} from "react";
import "../Css/Product.css";
import { useStateValue } from "./StateProvider";



function Product({ id, title, price, image, rating,quantity }) {
  const [{user, basket }, dispatch] = useStateValue();
  const [disableButton,setDisableButton]=useState(false)
  


  const addToBasket = (e) => {

    //dispatch the item to the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
        quantity,
       disableButton,
      },
    });
    setDisableButton(true)
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />

      <button onClick={addToBasket}  disabled={disableButton} className="addButton">{ disableButton ? <small>Add More Values in the Basket</small>:<small>Add to Basket</small>}</button>
    </div>
  );
}

export default Product;
