const express = require ('express');
const app = express();
const connectDB = require('./db')
const userRouter = require('./Routes/userRoutes')
const productRouter = require('./Routes/productRoutes')
const cartRouter = require('./Routes/cartRoutes')
const loginRouter = require('./Routes/loginRoutes')
const getAllCartItems = require('./Routes/AllCartItemsRoutes')
require('dotenv').config();

connectDB();

const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api/users',userRouter)
app.use('/api/products',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/login',loginRouter)
app.use('/api/getAllCartItems',getAllCartItems)


app.listen(PORT,()=>{
    console.log("The Server is Running at port 8000");
})


