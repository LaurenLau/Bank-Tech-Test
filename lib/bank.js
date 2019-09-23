'use strict';

function Bank() {
  this.balance = 0
  this.statement = 'date || deposits || withdrawals || balance'
  this.transactions = []
}

Bank.prototype.balance = function() {
  return this.balance;
}

Bank.prototype.deposit = function(amount) {
  this.balance += amount
  this.transactions.push([amount, new Date(), this.balance])
}

Bank.prototype.withdraw = function(amount) {
  if (amount >= this.balance) {
    return "Not enough money"
  } else {
  return this.balance -= amount;
  };
};

Bank.prototype.statement = function() {
  return this.statement ;
}

module.exports = Bank
