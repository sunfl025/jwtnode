const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const mongoose =require("mongoose")
const cookieParser = require("cookie-parser")
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user")
dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URL).then(o =>{
    console.log("SUCCESS CONNECTED")
}).catch(error => {
    console.log("FAIL CONNECTED")
})

app.use(cors());
app.use(cookieParser());
app.use(express.json());

//ROUTES
app.use("/v1/auth",authRoute);
app.use("/v1/user",userRoute);
//haha
app.listen(8000, () => {
    console.log("server is running");
})