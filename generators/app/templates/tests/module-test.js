jest.autoMockOff();

var mod = require('../src/<%= module %>');

describe('<%= module %>', function () {
  it('returns the sum of any two given numbers', function () {
    expect(mod(1, 2)).toBe(3);
  });
});
