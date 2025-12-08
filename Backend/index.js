const express = require ('express');
const app = express();
const cors = require("cors");
const connectDB = require('./db')
const userRouter = require('./Routes/userRoutes')
const productRouter = require('./Routes/productRoutes')
const cartRouter = require('./Routes/cartRoutes')
const loginRouter = require('./Routes/loginRoutes')
const getAllCartItems = require('./Routes/AllCartItemsRoutes')
const SignUpRouter = require('./Routes/SignupRoute')

app.use(cors());

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
app.use('/api/signUp',SignUpRouter)



app.listen(PORT,()=>{
    console.log("The Server is Running at port 8000");
})


