'use strict';

function Bank() {
  this.balance = 0
  this.statement = ['   date   || credit || debit || balance']
  this.transactions = []
}

Bank.prototype.balance = function() {
  return this.balance;
}

Bank.prototype.deposit = function(amount) {
  this.balance += amount
  this.transactions.push({date: new Date(), credit: 0, debit: amount, balance: this.balance})
}

Bank.prototype.withdraw = function(amount) {
  if (amount >= this.balance) {
    return "Not enough money"
  } else {
    this.balance -= amount
    this.transactions.push({date: new Date(), credit: -amount, debit: 0, balance: this.balance})

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
