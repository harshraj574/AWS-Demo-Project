const express = require('express');
var ip = require('ip');

const app = express();

app.get('/ping',(req,res)=>{

    return res.json({
        message: 'pong',
        serverAddress: ip.address()
    })

})

app.listen(3000,()=>{
    console.log("Server is running at port 3000");
})