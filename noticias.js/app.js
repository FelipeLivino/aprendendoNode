var app = require('./config/server.js');

app.get('/',function(req,res){
    res.render("home/index");
});

app.get('/formulario_inclusao_noticia',function(req,res){
    res.render("admin/form_add_noticia.ejs");
});

app.get('/noticias',function(req,res){
    res.render("noticias/noticias.ejs");
});


app.listen(3000,function(){
    console.log('teste');
});