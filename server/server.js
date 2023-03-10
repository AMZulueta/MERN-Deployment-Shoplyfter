const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const port = 8000;
const env = require('dotenv').config();

require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

require('./config/mongoose.config');
require('./routes/product.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`))