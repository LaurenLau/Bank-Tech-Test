'use strict';

describe('Bank', function() {
  var Bank = require('../lib/bank');

  var bank; 

  beforeEach(function() {
    bank = new Bank();
  });

  it('has a default balance of £0', function() {
    expect(bank.balance).toBe(0)
  });

  it('deposits money into the account', function() {
    bank.deposit(200)
    expect(bank.balance).toBe(200)
  });

  it('withdraws money from the account', function() {
    bank.deposit(100)
    bank.withdraw(50)
    expect(bank.balance).toBe(50)
  });

  it('cannot withdraw an amount larger than the current balance', function() {
    bank.deposit(100)
    expect(bank.withdraw(101)).toBe('Not enough money')
  });

  it('can show an empty bank statement', function() {
    expect(bank.showStatement()).toBe('   date   || credit || debit || balance')
  });

  it('can show one transaction', function() {
    bank.deposit(100)

    expect(bank.showStatement()).toBe(
      '   date   || credit || debit || balance\n Wed Sep 25 2019 ||   || 100 || £100'
      )
  })
  
});
