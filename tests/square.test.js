const square = require('../src/Square');

test('square 3 to equal 9', () => {
    expect(square(3)).toBe(9);
});