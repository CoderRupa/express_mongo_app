const express = require("express");
require('../db/db');

const Customer = require('./Customer');

const app = express();
const port = 3001;
app.use(express.json());

// GET API
app.get('/customers', (req, res) => {
   Customer.find().then((customers) => {
        if (customers.length !== 0) {
            res.json(customers);
        } else {
            res.status(400).send('Customer not found');
        }
    })
})

// dynamic url
app.get('/customer/:id', (req, res) => {
    Customer.findById(req.params.id).then((customer) => {
        if (customer) {
            res.json(customer);
        } else {
            res.status(400).send('Customer not found');
        }
    })
});

app.post('/customer', (req, res) => {
    const newCustomer = new Customer({ ...req.body });
    newCustomer.save().then(() => {
        res.send('New Customer Created Successfully');
    }).catch(() => {
        res.status(500).send('Internal Server Error');
    })
});

// dynamic url
app.delete('/customer/:id', (req, res) => {
    Customer.findOneAndDelete(req.params.id).then((customer) => {
        if (customer) {
            res.json('customer deleted Successfully');
        } else {
            res.status(400).send('customer not found');
        }
    })
});

app.listen(port, () => {
    console.log(`Customer Application is listening on port ${port}`)
})