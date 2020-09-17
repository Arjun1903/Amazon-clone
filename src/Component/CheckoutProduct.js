import React, { forwardRef } from "react";
import "../Css/CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import { Card, Typography,CardContent } from '@material-ui/core'

const CheckoutProduct = forwardRef(({ id,hideButton, image, title, price, rating,quantity },ref) =>{

  
  const [{ basket }, dispatch] = useStateValue();


  console.log("this is Basket>>>>",basket)

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVEFROM_BASKET",
      id: id,
      disableButton:false
    });
  }

  

    return (

    
        <Card className="cards" >
      
            <CardContent>
                <Typography>
    
      <div ref={ref} className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct_image" />

      <div className="checkoutProduct_info">
        <p className="checoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
              ))}
        </div>
        <div className="checkoutProduct_quantity">
            <strong>Quantity : {quantity}</strong>
        </div>
{!hideButton &&
    (
      <button onClick={removeFromBasket}>Remove from Basket</button>
      )
}
      </div>
    </div>
   
           
              </Typography>
              </CardContent>
              </Card >

  );
}
);


export default CheckoutProduct;
