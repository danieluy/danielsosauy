const express = require('express');
const app = express();
const compression = require('compression');
const helmet = require('helmet');
const server = require('http').Server(app);
const homeRouter = require('./routers/home');
const apiRouter = require('./routers/api');
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(compression());
app.use(express.static(__dirname + '/public'));
app.use('/api', apiRouter);
app.use('/', homeRouter);
server.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}`));
