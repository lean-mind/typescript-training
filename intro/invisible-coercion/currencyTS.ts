class Currency extends Number {
  constructor(value) {
    super(value)
  }

  static parseToDiscount(currency: Currency): Currency {
    return -currency
  }

  toDollar(): string {
    return `${this.valueOf().toFixed(2)} $`
  }

  toEuro(): string {
    return `${this.valueOf().toFixed(2)} €`
  }
}

console.log(
  Currency.parseToDiscount(
    new Currency(2.5)
  ).toEuro()
)
