const express=require("express")
const app=express()
module.exports=app
const morgan=require("morgan")
const fs=require("fs")
const path=require("path")
const nunjucks=require("nunjucks")
const bodyParser=require("body-parser")
nunjucks.configure('views', {noCache: true});
const db=require('./db')
// hace res.render funcionar con archivos html
app.set('view engine', 'html');
// cuando res.render funciona con archivos html, haz que use nunjucks para eso.
app.engine('html', nunjucks.render);
app.use(express.static('./public'))
//app.use(morgan('tiny'))
var accessLogStream=fs.createWriteStream(path.join(__dirname,'access.log'),{flags:'a'})
app.use(morgan('combined', {stream:accessLogStream}))

app.use(bodyParser.urlencoded({ extended: true }));

// Donde tu servidor y la app de express están siendo definidas
var models = require('./models');
// ... otras cosas
models.User.sync({})
.then(function () {
    return models.Page.sync({})
})
.then(function () {
    // asegurate de reemplazar el nombre de abajo con tu app de express
    app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error);


/*app.use("/", function(req,res){

})*/
db.sync()
.then(()=>{
    app.listen(3000)
    console.log('Escuchancdo en el puerto 3000')

})
