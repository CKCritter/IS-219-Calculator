const quotient = require('../src/Quotient');

test('divides 10 / 5 to equal 2', () => {
    expect(quotient(10, 5)).toBe(2);
});