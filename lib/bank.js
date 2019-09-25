'use strict';
var SaveTransactions = require('./SaveTransactions.js')

function Bank() {
  this.balance = 0
  this.statement = ['   date   || credit || debit || balance']
  this.transactions = []
}

var save = new SaveTransactions()

Bank.prototype.deposit = function(amount) {
  this.balance += amount
  save.deposits(amount, this.transactions, this.balance)
}

Bank.prototype.withdraw = function(amount) {
  if (amount >= this.balance) {
    return "Not enough money"
  } else {
    this.balance -= amount
    save.withdrawals(amount, this.transactions)

  };
};

Bank.prototype.convertTransaction = function(transactions) {
  transactions.forEach( x => { 
    this.statement.push(`${x.date.toDateString()} || £${x.credit} || £${x.debit} || £${x.balance}`)
  });
}

Bank.prototype.showStatement = function() {
  this.convertTransaction(this.transactions)
  return this.statement.join('\n ')
}

module.exports = Bank
