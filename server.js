require('dotenv').config();
const express = require('express');
const app = express();
const compression = require('compression');
const helmet = require('helmet');
const server = require('http').Server(app);
const homeRouter = require('./routers/home');
const apiRouter = require('./routers/api');
const bodyParser = require('body-parser');
const PORT = process.env.SERVER_PORT || 3000;

app.use(bodyParser.json());
app.use(helmet());
app.use(compression());
app.use(express.static(__dirname + '/public'));
app.use('/api', apiRouter);
app.use('/', homeRouter);
server.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}`));
