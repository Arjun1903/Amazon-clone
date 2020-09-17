import React, { useState ,useEffect} from 'react'
import '../Css/Order.css'
import { db } from './firebase';
import Orders from './Orders'
import { useStateValue } from "./StateProvider";


function Order() {
    const[orders,setOrders]=useState([]);
    const [{user}, dispatch] = useStateValue();

useEffect(() => {
    if(user){
        db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created','desc')
        .onSnapshot(snapshot =>(
            setOrders(snapshot.docs.map(doc =>({
                id:doc.id,
                data:doc.data()
            })))
        ))
    }
    else{
        setOrders([])
    }
    }, [])


    return (
        <div className="order">
            <h1>Your Orders</h1>

            <div className="orders_order">
{
orders?.map(order =>(
    <Orders order={order} />
))

}


            </div>
        </div>
    )
}

export default Order
