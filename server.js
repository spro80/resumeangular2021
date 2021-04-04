const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/resume-angular2021'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/resume-angular2021/index.html'));
});


app.set('port', process.env.PORT || 3000 )

app.listen(process.env.PORT || 3000, function(){
    console.log("[server.js] App is running at localhost:" + app.get('port'));
});

module.exports = app