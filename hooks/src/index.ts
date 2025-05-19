import express from "express";

const app=express();

app.post("/hooks/catch/:userId/:zapId",(req,res)=>{
    const userId = req.params.userId;
    const zapId = req.params.zapId;

    //store a db in new trigger

    //push it on to a queue (Kafka/redis)
    

})