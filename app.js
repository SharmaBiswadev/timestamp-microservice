var path=require('path');
var express=require('express');
var app=express();
var bodyparser=require('body-parser');


app.route('/:date')
    .get(function(req, res) {
// res.sendFile(process.cwd() + '/views/index.html');
     let unix,naturaldate;
     let timestamp=req.params.date;
     console.log(timestamp)
     if(typeof parseInt(timestamp)==="number"){
       let parsenaturaldate=(new Date(1512086400000)).toDateString().split(" ").slice(1);
       let year=parsenaturaldate.insert(2,',');
       naturaldate=parsenaturaldate.join("");
       unix=parseInt(timestamp)
     }else {
        unix=Date.parse(timestamp);
        naturaldate=timestamp
     }
     
          res.json({
      "unix":unix,
      "natural":naturaldate
     })
     })

    app.listen(8083,()=>{
    	console.log("server is listening")
    })