const { addDays, differenceInCalendarDays, format, parseISO } = require('date-fns')


const randomPositiveOrNegative = () => {
    if (Math.round(Math.random())) {
        return 1
    }
    return -1

}

const createPriceHistory = (firstDate, lastDate) => {
    let date = parseISO(firstDate)
    const priceHistory = {}
    let price = 10000
    while (differenceInCalendarDays(date, parseISO(lastDate)) < 1) {
        const stringDate = format(date, 'yyyy-MM-dd')
        price = Math.round(price + (price * 0.1 * randomPositiveOrNegative()))
        priceHistory[stringDate] = price
        date = addDays(date, 1)
    }
    return priceHistory
}


createPriceHistory('2019-01-01', '2021-01-01')








