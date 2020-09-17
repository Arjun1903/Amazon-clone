import React, { useState } from "react";
import "../Css/Home.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";
import Sliders from "./Sliders";



function Home() {
  const [{basket}]=useStateValue();
  return (
    <div className="home">
      <div className="home_container">
<Sliders />
        <div className="home_row">
        <Product
            id="1"
            title="Customize your 27 inch iMac with Retina 5K display."
           image="https://images-na.ssl-images-amazon.com/images/I/71Je03m8RmL._AC_SL1500_.jpg"
           price={2349}
            rating={4}
            quantity={1}
          />
          <Product
                id="2"
                title="New Apple MacBook Pro (16', 16GB RAM, 512GB memory) - Space Grey"
                image="https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._AC_SL1500_.jpg"
                price={1149}
                rating={5}
                quantity={1}
               
          />
          <Product
           id="3"
           title="Apple iPhone 11 Pro Max, 256GB"
           image=" https://images-na.ssl-images-amazon.com/images/I/81bsgUsPM-L._AC_SL1500_.jpg"
           price={1307}
           rating={4}
           quantity={1}
          />
  <Product
           id="4"
           title="Apple iPhone 11 Pro Max, 256GB"
           image="https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg
           "
           price={1257}
           rating={4}
           quantity={1}
        
          />
        

        </div>
        <div className="home_row">
          <Product
            id="5"
            title="LEFTGU Men's Slim fit Short-Sleeve Printed Hawaiian Shirt"
            image=" https://images-na.ssl-images-amazon.com/images/I/81Y65UCFFWL._AC_SX569._SX._UX._SY._UY_.jpg"
            price={19}
            rating={4}
            quantity={1}
            />
            <Product
            id="6"
            title="Python Is Above C Level Funny Programming Gift For Coding T-Shirt"
            image=" https://m.media-amazon.com/images/I/B1qmQK-r4OS._AC_CLa%7C2140%2C2000%7C81NFcyJvEjL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_SX679._SX._UX._SY._UY_.png"
            price={17}
            rating={4}
            quantity={1}
            />
         <Product
            id="7"
            title="HDE Performance Fishing Shirts for Men - Long Sleeve UPF 50 Sun Protection Quick-Dry Outdoor T-Shirt"
            image=" https://images-na.ssl-images-amazon.com/images/I/61q9e0NROYL._AC_SX679._SX._UX._SY._UY_.jpg"
            price={23}
            rating={3}
            quantity={1}
            /> <Product
            id="8"
            title="Go All Out Adult I Fixed It Android Fixes Apple Funny Tech Geek T-Shirt"
            image="https://images-na.ssl-images-amazon.com/images/I/51sXLVC0ZLL._AC_SX679._SX._UX._SY._UY_.jpg"
            price={16}
            rating={4}
            quantity={1}
            />  <Product
            id="9"
            title="WEMELY Mens Henley Curved Hem Long/Short Sleeve T-Shirt"
            image=" https://images-na.ssl-images-amazon.com/images/I/61P4jxiATxL._AC_SX679._SX._UX._SY._UY_.jpg"
            price={13}
            rating={4}
            quantity={1}
            /> 
        </div>
        <div className="home_row">
  
          <Product
            id="10"
            title="Adidas Originals Men's Superstar Sneaker"
image="https://images-na.ssl-images-amazon.com/images/I/710l46b4HnL._AC_UX695_.jpg"
            price={56}
            rating={4}
            quantity={1}
          />
           <Product
            id="11"
            title="DREAM PAIRS Bruno Marc Moda Italy Men's Prince Classic Modern Formal Oxford Wingtip Lace Up Dress Shoes."
            image="https://images-na.ssl-images-amazon.com/images/I/61zderJldsL._AC_SY695._SX._UX._SY._UY_.jpg"
            price={78}
            rating={4}
            quantity={1}
          />
           <Product
            id="12"
            title="Amy Q Women's High Heel Sandals Heeled Flip Flops"
            image="https://images-na.ssl-images-amazon.com/images/I/41Ge3NW4kLL._AC._SX._UX._SY._UY_.jpg"
            price={55}
            rating={3}
            quantity={1}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
