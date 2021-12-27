const Portfolio = require('../class/Portfolio')
const Stock = require('../class/Stock')
const mockStock1 = require('./stock1.json')
const mockStock2 = require('./stock2.json')
describe('Portfolio tests', () => {

    test('should return profit between 2 dates', () => {
        const newPortfolio = new Portfolio([
            new Stock(mockStock1),
            new Stock(mockStock2)
        ])

        expect(newPortfolio.profit('2021-12-24', '2021-12-26')).toEqual(6500)
    })
})