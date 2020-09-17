import React, { useState,useEffect } from 'react'
import '../Css/Footer.css'


function Footer({showBelow}) {

    const [show,setShow]=useState(showBelow ? false :true)

    const handleScroll = () =>{
    if(window.pageYOffset > showBelow ){
        if(!show) setShow(true)
    }else {
        if(show) setShow(false)
    }
    }
    
    useEffect(() => {
       if(showBelow) {
           window.addEventListener(`scroll`,handleScroll)
           return () => window.removeEventListener(`scroll`,handleScroll)
       }
    }, [])
    
    const handleClick = () =>{
        window[`scrollTo`]({top: 0, behavior:`smooth`})
    }
    

    return (
        <div className="footer">
            <button onClick={handleClick}>Back Top</button>
            <div className="footer_baseInfo">
<div className="footer_baseInfoOne">

<h3>Get to Know Us</h3>
<p>Careers</p>
<p>Blog</p>
<p>About Amazon</p>
<p>Investor Relations</p>
<p>Amazon Devices</p>
<p>Amazon Tours</p>
</div>

<div className="footer_baseInfoOne">
<h3>Let Us Help You</h3>
<p>Make Money with Us</p>
<p>Sell on Amazon</p>
<p>Sell on Amazon Business</p>
<p>Sell Your Apps on Amazon</p>
<p>Host an Amazon Hub</p>
<p>Become an Affiliate</p>
<p>Advertise Your Products</p>
<p>Self-Publish with Us</p>
<p>›See More Make Money with Us</p>
</div>



<div className="footer_baseInfoOne">
<h3>Let Us Help You</h3>
<p>Amazon and COVID-19</p>
<p>Your Orders</p>
<p>Shipping Rates & Policies</p>
<p>Returns & Replacements</p>
<p>Amazon Assistant</p>
<p>Help</p>
</div>

</div>
<div className="footerbaseInfoLine"/>
<div className="footerImage">
<img
          className="footer_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
        </div>

        <div className="footerCopyRight">
        <small>&copy;2020 Amazon clone! No rights reserved - this is a demo!</small>
        <small>Privacy - Terms - Sitemap - Company Details</small>
        </div>

        </div>
    )
}

export default Footer
