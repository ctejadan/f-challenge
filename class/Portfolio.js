const { addDays, differenceInCalendarDays, format, parseISO } = require('date-fns')

class Portfolio {
    constructor(stocks) {
        this.stocks = stocks
    }

    profit(initialDate, endDate) {
        let profit = 0

        this.stocks.forEach((stock, ix) => {

            let date = parseISO(initialDate)
            let stringDate = format(date, 'yyyy-MM-dd')
            let price = stock.price(stringDate)

            while (differenceInCalendarDays(date, parseISO(endDate)) < 1) {
                const stockPrice = stock.price(stringDate)
                if (!stockPrice) {
                    throw new Error('date not found in Stock')
                }

                profit += stockPrice - price
                price = stockPrice
                date = addDays(date, 1)
                stringDate = format(date, 'yyyy-MM-dd')
            }

        })
        return profit

    }
}

module.exports = Portfolio

