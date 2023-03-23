const express = require ('express');
const handlebars = require ('express-handlebars')

const productsRouter = require ('./routes/products.routes');
const cartsRouter = require ('./routes/carts.routes');
const realTimeProductsRouter = require('./routes/realTImeProducts');

const port = 8080;
const app = express();
app.use(express.json());

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')

app.use('/api/products', productsRouter);
app.use('/api/carts',cartsRouter);
app.use('/api/realTimeProducts',realTimeProductsRouter);


app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})
