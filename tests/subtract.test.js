const sum = require('../src/subtract');

test('subtracts 1 - 2 to equal -1', () => {
    expect(sum(1, 2)).toBe(-1);
});