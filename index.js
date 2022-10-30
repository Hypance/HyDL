const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const hostname = process.env.HOST;

const db = require('./controllers/symbol.controller');
const webSocketListener = require('./webSocketListener');
//const data = require('./data');
const { Symbol } = require('./models/symbol.model');
const { Candlestick } = require('./models/candlestick.model');
const { WebSocketRequest } = require('./models/WebSocketRequest');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
let webSocketRequest = new WebSocketRequest();
webSocketRequest.Symbol = "btcusdt";
webSocketRequest.Interval = "15m"
webSocketListener.init(webSocketRequest);

app.get('/', (request, response) => {
    // var result = [];
    // data.data.symbols.forEach(el => {
    //     var symbol = new Symbol();
    //     symbol.Name = el.symbol;
    //     symbol.MinQuantity = parseFloat(el.filters[1].minQty||0);
    //     symbol.MaxQuantity = parseFloat(el.filters[1].maxQty||0);
    //     symbol.IsActive = 1;
    //     result.push(db.createSymbol(symbol));
    // });
    // response.json(result);
    
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.get('/symbols', db.getSymbols);
app.get('/symbols/:id', db.getSymbolById);
app.post('/symbols', db.createSymbol);
app.put('/symbols/:id', db.updateSymbol);
app.delete('/symbols/:id', db.deleteSymbol);

app.listen(port, () => {
  console.log(`App running on port http://${hostname}:${port}.`);
});