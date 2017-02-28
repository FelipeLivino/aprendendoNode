var http = require('http');

var server = http.createServer(function(req,res){
    var categoria = req.url;
    if(categoria == '/tecnologia'){
        res.end('<html><body>Noticias  tec</body></html>');   
    }else if(categoria == '/moda'){
        res.end('<html><body>Noticias moda</body></html>');
    }else{
        res.end('<html><body>Olá mundo</body></html>');
    }
});

server.listen(3000);