import {Router}  from "express";
export const myRouter = Router()
import { getAllQuotes, addQuote, addQuotes, getQuote } from "../controller/QuotesController.js";

myRouter
        .get("/", getAllQuotes)
        .get("/:quoteIndex", getQuote)
        .post("/addQuote", addQuote)
        .post("/addQuotes", addQuotes)