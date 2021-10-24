const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51Iw4BKAhVS4GvwrtiX8lZHazM8xiSXiXUmYFmsuOIqheuaG5xb3nASrrMqvFwFM7ovCXnuhjVgcX1s0zEbfzKaGq00RtYBdl2C')

// API

// -App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (req, res) => res.status(200).send('hello world'));

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('Payment Rquest Recieved for >>>>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    }); 
 
    // OK - Created
    res.status(201).send({
         clientSecret: paymentIntent.client_secret,        
    })
});

// listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/react-clone-15847/us-central1/api