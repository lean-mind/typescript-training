class Currency extends Number {
  constructor(value) {
    super(value)
  }

  static parseToDiscount(currency) {
    return -currency
  }

  toEuro() {
    return `${this.valueOf().toFixed(2)} €`
  }
}

console.log(
  Currency.parseToDiscount(
    new Currency(2.5)
  ).toEuro()
)
