import React from "react";
import "../Css/Checkout.css";
import Subtotal from "../Component/Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import FlipMove from 'react-flip-move'

function Checkout() {
 
  const [{ user,basket }, dispatch] = useStateValue();
  let name   = user?.email.substring(0, user.email?.lastIndexOf("@"));
  let UserName = name?.charAt(0).toUpperCase() + name?.slice(1)

console.log("This is user....>>>>>>",user)

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/03/credit/img20/EoSS/eos_2020_maple_ur_770x60._CB406658813_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout_title">Welcome To Your Shopping Basket {user ? UserName : "Guest"}</h2>
          
          {
          basket.length<=0 ?
          <div className="checkout_emptyBasket">
          <h3>You have nothing in your basket ....Go back and Buy Something 
           </h3> 
<img 
className="checkout_emptyBasketImage"
src="https://images-na.ssl-images-amazon.com/images/I/61PnaNFtmNL._AC_SX425_.jpg"
/>

           </div>
  :

            <FlipMove   >

          {basket?.map((item) => (
            <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            quantity={item.quantity}
            />
            ))}
            </FlipMove>
          }

        </div>
        <img 
        className="checkout_img"
        src="https://m.media-amazon.com/images/G/03/cart/empty/kettle-desaturated._CB424694082_.svg" />
<p>The price and availability of items at Amazon.de are subject to change. The shopping basket is a temporary place to store a list of your items and reflects each item's most recent price.

Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
 
      </div>
     
      <div className="checkout_right">
        <Subtotal />
      </div>
    
    </div>
  );
}

export default Checkout;
