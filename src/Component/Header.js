import React, { useState } from "react";
import "../Css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { getQuantityTotal } from "./reducer";

function Header() {
  const [{ basket, userName, user }, dispatch] = useStateValue();
  let name   = user?.email.substring(0, user.email?.lastIndexOf("@"));
  let UserName = name?.charAt(0).toUpperCase() + name?.slice(1)
 
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };


  return (
    <div className="header">
      <Link to="/" className="header_link">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"} className="header_link">
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">Hello {user ? UserName : "Guest"}</span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to='/orders' className="header_link">
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo"> & Orders</span>
        </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout" className="header_link">
          <div className="header_optionCart">
            <div className="header_optionBasket">
              <span className="header_optionLineTwo header_basketCount ">
                {getQuantityTotal(basket)}
              </span>
              <ShoppingCartIcon />
            </div>
            <div className="header_option">
              <span className="header_optionLineOne">Shopping</span>
              <span className="header_optionLineTwo">Basket</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
