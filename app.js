import Express from "express";
import { myRouter } from "./model/QuotesModel.js";
import "dotenv/config";

const app = Express();
app.use(Express.json())
app.use("/QuranQuotes", myRouter)
app.listen(process.env.PORT, ()=>console.log(`Server is running at port: ${process.env.PORT}`)) 