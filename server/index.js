const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');

require('dotenv').config({path:'./.env'});
console.log(process.env.PORT);
require('./Models/db');
const PORT = process.env.PORT || 4000;

app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use(express.json());
app.use(cors({origin:process.env.CORS_ORIGIN}));
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})