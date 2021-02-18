const root = require('../src/Root');

test('Takes the square root of 16 to equal 4', () => {
    expect(root(16)).toBe(4);
});