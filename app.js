const Express= require('express');
const app = Express();
app.get('/gadgets',(response,request)=>{
    request.sendFile('./gadgets.html',{root:__dirname})
})

module.exports= app;