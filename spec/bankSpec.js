'use strict';

describe('Bank', function() {
  var Bank = require('../lib/bank');

  var bank; 

  beforeEach(function() {
    bank = new Bank();
  });

  it('has a default balance of £0', function() {
    expect(bank.balance).toBe(0)
  })
  it('deposits money into the account', function() {
    bank.deposit(200)
    expect(bank.balance).toBe(200)
  })
});
