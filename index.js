const express = require('express');
const mongoose = require('mongoose');
const app = express();

const productRoute = require('./routes/product.route.js');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Node-API collection name
// Initially database is connected and then app is listening(server is running)
mongoose
  .connect(
    'mongodb+srv://admin:qwerty78@backenddb.xwg5t.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB'
  )
  .then(() => {
    console.log('MongoDB Connected...');
    app.listen(3000, () =>
      console.log('Example app listening on port http://localhost:3000 !')
    );
  })
  .catch((err) => console.log('Connection failed', err));
