jest.autoMockOff();

var sum = require('../src/<%= module %>');

describe('<%= module %>', function () {
  it('returns the sum of any two given numbers', function () {
    expect(sum(1, 2)).toBe(3);
  });
});
