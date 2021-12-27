class Stock {

    constructor(stock) {
        this.stock = stock
    }

    price(date) {
        return this.stock.priceHistory[date]
    }
}

module.exports = Stock