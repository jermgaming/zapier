import express from "express";
import { PrismaClient } from "@prisma/client";

const client= new PrismaClient();

const app=express();
app.use(express.json())

app.post("/hooks/catch/:userId/:zapId",async (req,res)=>{
    const userId = req.params.userId;
    const zapId = req.params.zapId;
    const body = req.body;

    //store a db in new trigger
    await client.$transaction(async tx=>{
        const run = await client.zapRun.create({
            data:{
                zapId : zapId,
                metadata : body
            }
        });

        await client.zapRunOutbox.create({
            data:{
                zapRunId : run.id
            }
        })
        res.json({
            message:"Webhook received"
        })
    })
    

    //push it on to a queue (Kafka/redis)


})


app.listen(3000);