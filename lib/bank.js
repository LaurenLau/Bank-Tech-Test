
const SaveTransactions = require('./SaveTransactions.js');
const save = new SaveTransactions();
const Statement = require('./statement.js');
const statement = new Statement();

function Bank() {
  this.balance = 0,
  this.statement = [],
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
  statement.print(this.transactions, this.statement);
  return this.statement.join('\n');
};


module.exports = Bank;
