const Portfolio = require('../class/Portfolio')
const Stock = require('../class/Stock')
const mockStock1 = require('./mocks/stock1.json')
const mockStock2 = require('./mocks/stock2.json')
const annualStockMock = require('./mocks/annualStock.json')

describe('Portfolio tests', () => {

    test('should return profit between two dates with more than one Stock in Portfolio', () => {
        const newPortfolio = new Portfolio([
            new Stock(mockStock1),
            new Stock(mockStock2)
        ])

        expect(newPortfolio.profit('2021-12-24', '2021-12-26').amount).toEqual(6500)
    })

    test('should return profit between two dates with one Stock', () => {
        const newPortfolio = new Portfolio([new Stock(mockStock2)])

        expect(newPortfolio.profit('2021-12-24', '2021-12-26').amount).toEqual(4500)
    })

    test('should return 0 profit if same date', () => {
        const newPortfolio = new Portfolio([new Stock(mockStock2)])

        expect(newPortfolio.profit('2021-12-24', '2021-12-24').amount).toEqual(0)
    })

    test('should return error if date doesnt exists in Stock', () => {
        const newPortfolio = new Portfolio([new Stock(mockStock2)])
        try {
            newPortfolio.profit('2021-12-24', '2021-12-28')
        } catch (e) {
            expect(e.message).toBe('date not found in Stock')
        }
    })

    test('should return annualizedReturn when there are more than 364 days between the two dates', () => {
        const newPortfolio = new Portfolio([new Stock(annualStockMock)])

        expect(newPortfolio.profit('2019-01-01', '2021-01-01')).toEqual({
            "amount": 14637, "annualizedReturn": "0.53", "profitPercentage": "133.06"
        })
    })
})