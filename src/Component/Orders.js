import React from 'react'
import '../Css/Orders.css'
import moment from 'moment'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'

function Orders({order}) {
    console.log("this is orde....>>>>r",order)
    return (
        <div className="orders">
            <h2>Order</h2>

    <p>{moment.unix(order.data.created).format('MMMM Do YYYY,h:mma')}</p>
     <p className="order_id">
    <small>{order.id}</small>
     </p>
     {order.data.basket?.map(item => (
 <CheckoutProduct
 id={item.id}
 title={item.title}
 image={item.image}
 price={item.price}
 rating={item.rating}
 quantity={item.quantity}
 hideButton
 />

     ))



     }
     <CurrencyFormat
        renderText={(value) => (
        <h3 className="orders_title">Order Total:{value}</h3>
          
           
        )}
        decimalScale={2}
        value={order.data.amount/100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
     
     
     
        </div>
    )
}

export default Orders
