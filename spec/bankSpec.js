'use strict';

describe('Bank', function() {
  var Bank = require('../lib/bank');

  var bank; 

  beforeEach(function() {
    bank = new Bank();
  });

  it('returns "Hello world"', function() {
    expect(bank.test()).toBe('Hello world')
  });
});