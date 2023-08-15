/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***********************/

const assert = require('assert');

const isElement = require('../problems/1-is-element.js');
const minMaxProduct = require('../problems/2-min-max-product.js');
const phraseFinder = require('../problems/3-phrase-finder.js');
const multiples = require('../problems/4-multiples.js');
const valueReplace = require('../problems/5-value-replace.js');

describe('isElement()', function () {
  it('should return a boolean indicating if the element is found inside the array', function () {
    assert.equal(isElement([1, 2, 3, 4, 5], 5), true);
    assert.equal(isElement(['a', 'b', 'c'], 'a'), true);
    assert.equal(isElement(['a', 'b', 'c'], 'd'), false);
  });
});

describe('minMaxProduct()', function () {
  it('should return the product of the min and max value of the array.', function () {
    assert.equal(minMaxProduct([6, 3, 7, 2]), 14);
    assert.equal(minMaxProduct([0, 1, -5, 3, 6]), -30);
  });
});

describe('phraseFinder()', function () {
  it('should return a boolean indicating if the phrase can be formed by a pair of the given words', function () {
    assert.equal(
      phraseFinder(['world', 'prep', 'hello', 'bootcamp'], 'bootcamp prep'),
      true
    );
    assert.equal(
      phraseFinder(['world', 'prep', 'hello', 'bootcamp'], 'bootcamp prep'),
      true
    );
    assert.equal(
      phraseFinder(['world', 'prep', 'hello', 'bootcamp'], 'hello world'),
      true
    );
    assert.equal(
      phraseFinder(['world', 'prep', 'hello', 'bootcamp'], 'hello prep'),
      true
    );
    assert.equal(
      phraseFinder(['world', 'prep', 'hello', 'bootcamp'], 'hello goodbye'),
      false
    );
  });
});

describe('multiples()', function () {
  it('should return an array of positive numbers less than `max` that are divisible by `num`', function () {
    assert.deepEqual(multiples(10, 2), [2, 4, 6, 8]);
    assert.deepEqual(multiples(15, 3), [3, 6, 9, 12]);
  });
});

describe('valueReplace()', function () {
  it('should return a new array where elements of the original array are replaced with their corresponding values in the object', function () {
    const actual1 = valueReplace(['a', 'b', 'c', 'd'], { a: 1, b: 2, d: 4 });
    const expected1 = [1, 2, 'c', 4];
    assert.deepEqual(actual1, expected1);

    const actual2 = valueReplace(['danny', 'kurstie', 'tommy'], {
      kurstie: 'operations',
      danny: 'placements',
    });
    const expected2 = ['placements', 'operations', 'tommy'];
    assert.deepEqual(actual2, expected2);
  });
});
