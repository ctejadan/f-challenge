const { addDays, differenceInCalendarDays, format, parseISO } = require('date-fns')

class Portfolio {
    constructor(stocks) {
        this.stocks = stocks
    }

    profit(initialDate, endDate) {
        let date = parseISO(initialDate)
        const lastDate = endDate


        let stringDate = format(date, 'yyyy-MM-dd')
        let price = 0
        let profit = 0


        while (differenceInCalendarDays(date, parseISO(lastDate))) {
            this.stocks.forEach((stock, ix) => {
                const stockPrice = stock.price(stringDate)
                if (ix > 0) {
                    profit = price - stockPrice
                }
                price = stockPrice
                date = addDays(date, 1)
            })
            return profit
        }
    }
}

module.exports = Portfolio

