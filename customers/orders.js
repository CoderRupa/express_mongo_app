const express = require("express");
require('../db/db');

const Order = require('./Order');

const app = express();
const port = 3002;
app.use(express.json());

// GET API
app.get('/orders', (req, res) => {
   Order.find().then((orders) => {
        if (orders.length !== 0) {
            res.json(orders);
        } else {
            res.status(400).send('order not found');
        }
    })
})

// dynamic url
app.get('/order/:id', (req, res) => {
    Order.findById(req.params.id).then((order) => {
        if (order) {
            res.json(order);
        } else {
            res.status(400).send('Order not found');
        }
    })
});

app.post('/order', (req, res) => {
    const newCustomer = new Order({ ...req.body });
    newCustomer.save().then(() => {
        res.send('New Order Created Successfully');
    }).catch(() => {
        res.status(500).send('Internal Server Error');
    })
});

// dynamic url
app.delete('/customer/:id', (req, res) => {
    Customer.findOneAndDelete(req.params.id).then((customer) => {
        if (order) {
            res.json('order deleted Successfully');
        } else {
            res.status(400).send('order not found');
        }
    })
});

app.listen(port, () => {
    console.log(`Order Application is listening on port ${port}`)
})