# Fintual Challenge

In order to test my development I have created some mocks to emulate the Stock functionality

## Mocks

Mocks looks like this and based on this structure, the tests where done

```bash
{
    "name": "stock1",
    "priceHistory": {
        "2021-12-24": 10000,
        "2021-12-25": 11000,
        "2021-12-26": 12000
    }
}
```
## Structure

* In /class you can find the Portfolio and Stock Classes with its logic
* In /tests you can find the portfolio unit tests
* In /test/mocks you can find some Stock mocks and a file (mockGenerator.js) to generate them