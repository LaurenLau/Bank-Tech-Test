
const SaveTransactions = require('./SaveTransactions.js');
const save = new SaveTransactions();
const Statement = require('./statement.js');
const statement = new Statement();

function Bank() {
  this.balance = 0,
  this._statement = [],
  this._transactions = [];
}

Bank.prototype.deposit = function(amount) {  
  if (amount > 100000) {
    return 'Please try a smaller amount';
  } else {
    this.balance += amount;
    save.deposit(amount, this._transactions, this.balance);
  };
};

Bank.prototype.withdraw = function(amount) {
  if (amount >= this.balance) {
    return 'Not enough money';
  } else {
    this.balance -= amount;
    save.withdrawal(amount, this._transactions, this.balance);
  };
};

Bank.prototype.showStatement = function() {
  statement._print(this._transactions, this._statement);
  process.stdout.write(this._statement.join('\n'));
};


module.exports = Bank;
