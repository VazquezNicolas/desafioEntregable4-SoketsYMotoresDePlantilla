const express = require ('express'); //Importo express
const handlebars = require ('express-handlebars') //Importo handlebars
const {Server} = require ('socket.io')

const productsRouter = require ('./routes/products.routes');
const cartsRouter = require ('./routes/carts.routes');
const realTimeProductsRouter = require('./routes/realTImeProducts');

const port = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('views engine', 'handlebars')

//Rutas
app.use('/api/products', productsRouter);
app.use('/api/carts',cartsRouter);
app.use('/api/realTimeProducts',realTimeProductsRouter);


const httpServer = app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})

const io = new Server (httpServer)

io.on('connection', socket => {
    console.log('Cliente conectado')
    
    io.emmit('mensajeServidor', 'Hola desde servidor')
})