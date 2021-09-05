require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT;

//Connect to mongoDB with Mongoose
const mongoDB = require('./config/mongoDB.config');
mongoDB();

//Middlewares for create a new product with POST
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({credentials:true, origin: 'http://localhost:3000'}));
//Routes
app.use(`/api`, require('./routes/products.routes'));

app.listen(PORT, () => {
    console.log(` 1 : Server lock and loading on PORT: ${PORT}`);
})
