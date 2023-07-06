import mongoose from "mongoose";
import {Schema} from "mongoose"
import "dotenv/config"

main().catch(err=> console.log(err))
async function main (){
    await mongoose.connect("mongodb+srv://nooricechuang:eunice143@cluster0.z6c7v65.mongodb.net/quotes?retryWrites=true&w=majority");
    console.log("mongoose is connected!")
}

//creating schema

const quoteSchema = new Schema({
    quranQuote: {type: String, required: true},
    reference: {type: String, required: true}
})

const Quote = mongoose.model("QuranQuote", quoteSchema);


export const addQuote = async(req, res)=>{
    try{
        await Quote.create({...req.body});
        res.status(200).json({quoteAdded: true});
    }
    catch(err){
        res.status(400).json(err);
    }
    
}

export const addQuotes = async(req, res)=>{
    try{
        await Quote.create([...req.body]);
        res.status(200).json({quotesAdded: true});
    }
    catch(err){
        res.status(400).json(err);
    }
}

export const getAllQuotes = async(req, res)=> {
    try{
        res.status(200).json(await Quote.find({},{_id:0, __v:0}));
    }catch(err){
        res.status(400).json(err)
    }
}

export const getQuote = async(req, res)=> {
    const allQuotes = await Quote.find({},{_id:0, __v:0})
    const quoteIndex = req.params.quoteIndex - 1;
    if(quoteIndex+1>allQuotes.length || quoteIndex<0){
        res.status(400).json({
            quoteExists : false,
            error: `total quotes available are ${allQuotes.length}, and you are trying to access quote number ${quoteIndex+1}`
        })
    }
    try{
        res.status(200).json(allQuotes[req.params.quoteIndex-1]);
    }catch(err){
        res.status(400).json(err)
    }
}

    
