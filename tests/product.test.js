const product = require('../src/Product');

test('multiplies 3 * 2 to equal 6', () => {
    expect(product(1, 2)).toBe(6);
});