let cat = {
    positionFromTop: 0,
    positionFromLeft: 0,
}
const express = require("express");
const server = express();
const url = require("url");

server.get("", function(req, res){
    let reqURL = req.url;
    let queryObj = url.parse(reqURL, true).query;
    let top = +queryObj.top;
    let left = +queryObj.left;
    
    let catTop = cat.positionFromTop;
    let catleft = cat.positionFromLeft;
    if(queryObj.top !== undefined && queryObj.left !== undefined){
        cat.positionFromTop += top;
        cat.positionFromLeft += left;
    }

    res.writeHead(200, {"Content-Type": "text/html"});
    let text = "<html><hrad><title>Cat in Table</title></hrad><body><h1>Laves Citik?</h1><table border='1px'>"
    for(let i = 0; i <= 7; i++){
        text += "<tr  height='100px' >";
        for(let j = 0; j <= 7; j++){
            text += "<td width='100px'>";
            if(i === catTop && j === catleft){
                text += "<img src='https://i.pinimg.com/564x/3a/2b/3d/3a2b3d9d4e9e3e839cbd86347da949b4--funny-cats-funny-animals.jpg' width='100%'>"
            }
            text += "</td>";
        }
        text += "</tr>"
    }

    text += "<table></table></body></html>"

    res.write(text);
    res.end();
})

server.listen(2222);