class Currency extends Number {
  constructor(value: number) {
    super(value)
  }

  static parseToDiscount(currency: Currency): Currency {
    return -currency
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
