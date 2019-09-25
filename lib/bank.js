/* bank.js */

const SaveTransactions = require('./SaveTransactions.js');
const save = new SaveTransactions();
const PrintStatement = require('./printStatement.js');
const print = new PrintStatement();

function Bank() {
  this.balance = 0,
  this.statement = ['   date   || credit || debit || balance'],
  this.transactions = [];
}

Bank.prototype.deposit = function(amount) {
  this.balance += amount;
  save.deposit(amount, this.transactions, this.balance);
};

Bank.prototype.withdraw = function(amount) {
  if (amount >= this.balance) {
    return 'Not enough money';
  } else {
    this.balance -= amount;
    save.withdrawal(amount, this.transactions, this.balance);
  };
};

Bank.prototype.showStatement = function() {
  print.convertTransaction(this.transactions, this.statement);
  return this.statement.join('\n ');
};

module.exports = Bank;
