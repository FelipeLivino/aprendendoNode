var express = require('express');
var app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.send("<html><body>noticias</body></html>");
});

app.get('/tecnologia',function(req,res){
    res.send("<html><body>noticias tecnologia</body></html>");
});

app.listen(3000,function(){
    console.log('rodou');
});