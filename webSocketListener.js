require('dotenv').config();
const WebSocket = require('ws');
const { Candlestick } = require('./models/candlestick.model');
const db = require('./controllers/candlestick.controller');

const init = (request, response) => {
  const ws = new WebSocket(`${process.env.BINANCE_FUTURES_WSS}${request.Symbol}@kline_${request.Interval}`);
  ws.on("open", function open() {
    console.log(`WebSocket ${request.Symbol} successfully connected!`);
  });
  ws.on("close", function open() {
    console.log(`WebSocket ${request.Symbol} Closed`);
  });
  ws.on("error", function open(err) {
    console.log(`WebSocket ${request.Symbol} Error`);
  });
  ws.on("message", (data) => {
    if (data) {
      const trade = JSON.parse(data);
      if (trade.k.x) {
        const candlestick = new Candlestick();
        const openTime = new Date(trade.k.t);
        const closeTime = new Date(trade.k.T);
  
        candlestick.Name = trade.s;
        candlestick.OpenTime = openTime;
        candlestick.OpenPrice = trade.k.o;
        candlestick.HighPrice = trade.k.h;
        candlestick.LowPrice = trade.k.l;
        candlestick.ClosePrice = trade.k.c;
        candlestick.Volume = trade.k.V;
        candlestick.CloseTime = closeTime;
        candlestick.Interval = 3;
        candlestick.Symbol = trade.s;
        candlestick.IsActive = true;
  
        console.log(db.createCandlestick(candlestick));
      }
    }
  });
};

module.exports = {
  init,
};
