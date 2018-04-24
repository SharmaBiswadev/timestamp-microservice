var path=require('path');
var express=require('express');
var app=express();
var bodyparser=require('body-parser');


app.route('/:date')
    .get(function(req, res) {
// res.sendFile(process.cwd() + '/views/index.html');
       var unix=null,naturaldate=null;
     //console.log(parseInt(timestamp),timestamp)
      let timestamp=req.params.date;
     if(!isNaN(timestamp)){
     	let parsetime=new Date(parseInt(timestamp))
     	console.log(parsetime);
     	if(parsetime=='Invalid Date'){
     		console.log("got invalid date")
     	 send_response(null,null,res);
     	}
       let parsenaturaldate=parsetime.toDateString().split(" ").slice(1);
       let year=parsenaturaldate.splice(2,0,',');
       year=parsenaturaldate.splice(1,0,' ')
       naturaldate=parsenaturaldate.join("")
       console.log(naturaldate)
       unix=parseInt(timestamp)
       send_response(unix,naturaldate,res);
     }else {
        unix=Date.parse(timestamp);
        console.log(unix);
        if(!isNaN(unix))
        naturaldate=timestamp
        else
       return send_response(null,null,res);
    	send_response(unix,naturaldate,res);
     }
 })
     function send_response(unix,naturaldate,res){ 
         console.log(unix,naturaldate)
          res.json({
      "unix":unix,
      "natural":naturaldate
     })
      }

    app.listen(8083,()=>{
    	console.log("server is listening")
    })