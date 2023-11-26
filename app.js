const express = require('express');
const cors = require('cors');
const productRouter = require('./routers/ProductRouter');
const app = express();
const port = 3000;

app.use(cors());
app.use('/products', productRouter);

app.listen(port, () => {
    console.log('Server is running at http://localhost:${port}');
});