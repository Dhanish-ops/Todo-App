const express = require("express");
const { createtodo, updatetpdo } = require("./types");
const {todo, todo}=require("./db");
const app = express();

app.use(express.json());

app.post("/todo",async function(req,res){
        const createpayload = req.body;
        const parsedpayload = createtodo.safeparse(createpayload);
        if (!parsedpayload.success){
            req.statusCode(411).json ({
                msg: "you have enter the wrong input",
            })
            return;
        }
        await todo.create( {
            title:createpayload.title,
            Description:createpayload.Description,
            completed:false
        })
        res.json({
            msg:"Todo created"
        })
})

app.get("/todos",async function(req,res){
    const todos = await todo.find({});

    res.json({
        todo
    })
})

app.put("/completed",async function(req,res){
    const createpayload = req.body;
        const parsedpayload = createtodo.safeparse(createpayload);
        if (!parsedpayload.success){
            req.statusCode(411).json ({
                msg: "you have enter the wrong input",
            })
            return;
        }
        await todo.update({
            _id: req.body.id
        },{
            completed:true
        })
        res.json({
            msg:"todo marked as completed"
        })
})

app.listen(3000);