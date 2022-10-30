class Symbol {
  constructor() {
    this.Id = null;
    this.Name = null;
    this.MinQuantity = null;
    this.MaxQuantity = null;
    this.IsActive = null;
  }

  initModel(data) {
    this.Id = data.Id;
    this.Name = data.Name;
    this.MinQuantity = data.MinQuantity;
    this.MaxQuantity = data.MaxQuantity
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

  getMinQuantity() {
    this.MinQuantity;
  }
  setMinQuantity(MinQuantity) {
    this.MinQuantity = MinQuantity;
  }

  getMaxQuantity() {
    this.MaxQuantity;
  }
  setMaxQuantity(MaxQuantity) {
    this.MaxQuantity = MaxQuantity;
  }

  getIsActive() {
    this.IsActive;
  }
  setIsActive(IsActive) {
    this.IsActive = IsActive;
  }

  equals(otherSymbol) {
    return otherSymbol.getName() == this.getName() && otherSymbol.getId() == this.getId();
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

exports.Symbol = Symbol;
