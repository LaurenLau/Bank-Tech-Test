'use strict';

function Bank() {
  this.balance = 0
}

Bank.prototype.balance = function() {
  return this.balance;
}

Bank.prototype.deposit = function(amount) {
  return this.balance += amount;
}

Bank.prototype.withdraw = function(amount) {
  if (amount >= this.balance) {
    return "Not enough money"
  } else {
  return this.balance -= amount;
  };
};

module.exports = Bank
