// 1. Register POST API - http://localhost:3000/register
// 2. Login POST API - http://localhost:3000/login
// 3. Cart detail GET API - http://localhost:3000/cart
// 4. Product detail GET API - http://localhost:3000/products/1

// For example 
// app.get('/products/:id', (req, res) => {
// const productId = req.params.id;
// res.send(`Product with ID: ${productId}`);
// });

// Categories CRUD API

// 5. Categories list GET API - http://localhost:3000/categories
// 6. Add Category POST API - http://localhost:3000/categories
// 7. Update Category PUT API - http://localhost:3000/categories
// 8. Delete Category Delete API - http://localhost:3000/categories

// Products CRUD API

// 9. Products list GET API - http://localhost:3000/products
// 10. Add Product POST API - http://localhost:3000/products
// 11. Update Product PUT API - http://localhost:3000/products
// 12. Delete Product Delete API - http://localhost:3000/products

// For reference 
// https://github.com/programmingwithharsh/commApp_express_june25

// https://www.npmjs.com/package/express
// https://expressjs.com/en/5x/api.html

import express from 'express'; // ES6 Import

const app = express();
const port = 3000;

// 1. Register POST API - http://localhost:3000/register
app.post('/register', (req, res) => {
    res.send("registeration done")
})

// 2. Login POST API - http://localhost:3000/login
app.post('/login', (req, res) => {
    res.send("registeration successful!!!")
})

// 3. Cart detail GET API - http://localhost:3000/cart
app.get('/cart', (req, res) => {
    res.send("Get to the cart")
})

// 4. Product detail GET API - http://localhost:3000/products/1
app.get('/products/:id', (req, res) => {
const productId = req.params.id;
res.send(`Product with ID: ${productId}`);
});

// Categories CRUD API

// 5. Categories list GET API - http://localhost:3000/categories
app.get('/categories', (req, res) => {
res.send('GET to the categories');
});

// 6. Add Category POST API - http://localhost:3000/categories
app.post('/categories', (req, res) => {
res.send('POST to the categories');
});

// 7. Update Category PUT API - http://localhost:3000/categories
app.put('/categories', (req, res) => {
res.send('PUT to the categories');
});

// 8. Delete Category Delete API - http://localhost:3000/categories

app.delete('/categories', (req, res) => {
    res.send('DELETE to the categories')
})

// Products CRUD API

// 9. Products list GET API - http://localhost:3000/products
app.get('/products', (req, res) => {
res.send('GET to the products');
});

// 10. Add Product POST API - http://localhost:3000/products
app.post('/products', (req, res) => {
res.send('POST to the products');
});

// 11. Update Product PUT API - http://localhost:3000/products
app.put('/products', (req, res) => {
res.send('PUT to the products');
});

// 12. Delete Product Delete API - http://localhost:3000/products
app.delete('/products', (req, res) => {
res.send('DELETE to the products');
});

app.listen(port, () => {
    console.log(`Communication Application is listening on port ${port}`)
})