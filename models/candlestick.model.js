class Candlestick {
  constructor() {
    this.Id = null;
    this.Name = null;
    this.OpenTime = null;
    this.OpenPrice = null;
    this.HighPrice = null;
    this.LowPrice = null;
    this.ClosePrice = null;
    this.Volume = null;
    this.CloseTime = null;
    this.Interval = null;
    this.Symbol = null;
    this.IsActive = null;
  }

  initModel(data) {
    this.Id = data.Id;
    this.Name = data.Name;
    this.OpenTime = data.OpenTime;
    this.OpenPrice = data.OpenPrice;
    this.HighPrice = data.HighPrice;
    this.LowPrice = data.LowPrice;
    this.ClosePrice = data.ClosePrice;
    this.Volume = data.Volume;
    this.CloseTime = data.CloseTime;
    this.Interval = data.Interval;
    this.Symbol = data.Symbol;
    this.IsActive = data.IsActive;
  }

  getId() {
    return this.Id;
  }
  setId(Id) {
    this.Id = Id;
  }

  getName() {
    this.Name;
  }
  setName(Name) {
    this.Name = Name;
  }

  getOpenTime() {
    return this.OpenTime;
  }
  setOpenTime(OpenTime) {
    this.OpenTime = OpenTime;
  }

  getOpenPrice() {
    return this.OpenPrice;
  }
  setOpenPrice(OpenPrice) {
    this.OpenPrice = OpenPrice;
  }
  getHighPrice() {
    return this.HighPrice;
  }
  setHighPrice(HighPrice) {
    this.HighPrice = HighPrice;
  }

  getLowPrice() {
    return this.LowPrice;
  }
  setLowPrice(LowPrice) {
    this.LowPrice = LowPrice;
  }

  getLowPrice() {
    return this.LowPrice;
  }
  setLowPrice(LowPrice) {
    this.LowPrice = LowPrice;
  }

  getClosePrice() {
    return this.ClosePrice;
  }
  setClosePrice(ClosePrice) {
    this.ClosePrice = ClosePrice;
  }

  getVolume() {
    return this.Volume;
  }
  setVolume(Volume) {
    this.Volume = Volume;
  }

  getCloseTime() {
    return this.CloseTime;
  }
  setCloseTime(CloseTime) {
    this.CloseTime = CloseTime;
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

  getIsActive() {
    this.IsActive;
  }
  setIsActive(IsActive) {
    this.IsActive = IsActive;
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

exports.Candlestick = Candlestick;
