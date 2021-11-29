const tail = require('../tail.js')
const assert = require('chai').assert;

describe("#tail general functions", () => {
  it('returns [3, 5, 7, 10] for [1, 3, 5, 7, 10]', () => {
    assert.deepEqual(tail([1, 3, 5, 7, 10]), [3, 5, 7, 10]);
  });
  it('returns empty array for [1]', () => {
    assert.deepEqual(tail([1]), []);
  });
  it('returns empty array for []', () => {
    assert.deepEqual(tail([]), []);
  });
});

describe("#tail output checks", () => {
  let phrase = (["Hello", "Lighthouse", "Labs"]);
  it('returns 2 for [`Hello`, `Lighthouse`, `Labs`].length', () => {
    assert.deepEqual(tail(phrase).length, 2);
  });
  it('returns "Lighthouse" for [`Hello`, `Lighthouse`, `Labs`][0]', () => {
    assert.deepEqual(tail(phrase)[0], "Lighthouse");
  });
  it('returns "Labs" for [`Hello`, `Lighthouse`, `Labs`][1]', () => {
    assert.deepEqual(tail(phrase)[1], "Labs");
  });
});

describe("#tail check original array is not modified", () => {
  const phrase = ['I', 'Love', 'Beer'];
  it("return `Beer` for ['I', 'Love', 'Beer'][2]", () => {
    assert.strictEqual(phrase[2], "Beer");
  });
});