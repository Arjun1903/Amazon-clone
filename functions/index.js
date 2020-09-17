const functions = require('firebase-functions');
const express = require('express');
const cors=require('cors');
const stripe= require("stripe")('sk_test_51HQGp5EDpRoUxaMyTOoKp6KpY40K2BpokqXXDrSmlemqGycqzUveJjUSmmVnHS0mZUPuriFdOhCuMqHKLepLCaaL00e0JnB4k6')

//APi

//API -config
const app=express();

//Middlewares
app.use(cors({origin:true}));
app.use(express.json())


//API routes
app.get("/",(request,response)=> response.status(200).send('Hello World'))

app.post("/payments/create", async (request ,response)=>{
    const total=request.query.total;
    console.log('Payment Request Recieved BOOM!!! for this amout>>>',total)
    const paymentIntent = await stripe.paymentIntents.create({
    amount:total,//subunits of the currency
    currency:"usd",
})
response.status(201).send({
    clientSecret:paymentIntent.client_secret,
})

})


//Listen command
exports.api =functions.https.onRequest(app)

//end Point
//http://localhost:5001/clone-8c385/us-central1/api