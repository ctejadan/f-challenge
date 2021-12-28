const { addDays, differenceInCalendarDays, format, parseISO } = require('date-fns')

class Portfolio {
    constructor(stocks) {
        this.stocks = stocks
    }

    profit(initialDate, endDate) {
        let profit = 0
        let initialPrice = 0
        let daysDifference = Math.abs(differenceInCalendarDays(parseISO(initialDate), parseISO(endDate)))

        this.stocks.forEach((stock) => {
            let date = parseISO(initialDate)
            let stringDate = format(date, 'yyyy-MM-dd')
            let price = stock.price(stringDate)
            initialPrice += price

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

        const profitPercentage = ((profit * 100) / initialPrice).toFixed(2)
        const response = { amount: profit, profitPercentage: profitPercentage }

        if (daysDifference > 364) {
            response.annualizedReturn = (Math.pow(1 + (profitPercentage / 100), (365 / daysDifference)) - 1).toFixed(2)
        }
        return response

    }
}

module.exports = Portfolio

