class WebSocketRequest {
    constructor() {
      this.Interval = null;
      this.Symbol = null;
    }
  
    getInterval() {
      return this.Interval;
    }
    setInterval(Interval) {
      this.Interval = Interval;
    }
  
    getSymbol() {
      return this.Symbol;
    }
    setSymbol(Symbol) {
      this.Symbol = Symbol;
    }
  
    equals(otherCandlestick) {
      return otherCandlestick.getName() == this.getName() && otherCandlestick.getId() == this.getId();
    }
  
    fill(newFields) {
      for (let field in newFields) {
        if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
          if (this[field] !== "undefined") {
            this[field] = newFields[field];
          }
        }
      }
    }
  }
  
  exports.WebSocketRequest = WebSocketRequest;
  