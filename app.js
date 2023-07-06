import Express from "express";
import { myRouter } from "./model/QuotesModel.js";
import "dotenv/config";

const app = Express();
app.use(Express.json())
app.use("/api", myRouter);
app.get("/",(req,res)=>{
    res.status(200).send(`<!DOCTYPE html>
    <html>
    <head>
      <title>Quran Quotes API Homepage</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
        
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          box-sizing: border-box;
        }
        
        h1 {
          color: #333;
          text-align: center;
        }
        
        h2 {
          color: #666;
          margin-bottom: 10px;
        }
        
        ul {
          list-style-type: disc;
          padding-left: 20px;
        }
        
        code {
          background-color: #f4f4f4;
          padding: 2px 4px;
          border-radius: 4px;
          font-family: Consolas, monospace;
        }
        
        footer {
          margin-top: 40px;
          color: #888;
          font-size: 14px;
          text-align: center;
        }
        
        @media screen and (max-width: 600px) {
          h1 {
            font-size: 24px;
          }
          
          h2 {
            font-size: 18px;
          }
          
          .container {
            padding: 10px;
          }
          
          footer {
            font-size: 12px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to the Quran Quotes API Homepage!</h1>
    
        <h2>Endpoints:</h2>
        <ul>
          <li><strong>GET /quranquotes</strong>: Get all Quran quotes (<a href="https://quran-quotes-api.vercel.app/quranquotes" target="_blank">Test</a>)</li>
          <li><strong>GET /quranquotes/1</strong>: Get a single Quran quote by quote number (<a href="https://quran-quotes-api.vercel.app/quranquotes/1" target="_blank">Test</a>)</li>
        </ul>
    
        <h2>Example API Requests:</h2>
        <p>Get all Quran quotes:</p>
        <pre><code>GET /quranquotes</code></pre>
    
        <p>Get a single Quran quote:</p>
        <pre><code>GET /quranquotes/1</code></pre>
    
        <h2>API Response Format:</h2>
        <p>The API response will be in JSON format and will contain the following properties:</p>
        <ul>
          <li><strong>quranQuote</strong>: The Quran quote</li>
          <li><strong>reference</strong>: The reference of the Quran quote</li>
        </ul>
      </div>
    
      <footer>
        <div class="container">
          <p>© 2023 Quran Quotes API. All rights reserved.</p>
        </div>
      </footer>
    </body>
    </html>
    `)
    })
//this is not good practice to send html page like this
app.listen(process.env.PORT, ()=>console.log(`Server is running at port: ${process.env.PORT}`)) ;
