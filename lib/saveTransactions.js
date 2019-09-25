/* saveTransactions.js */


function SaveTransactions() {
}

SaveTransactions.prototype.deposit = function(amount, transaction, bal) {
  transaction.push({
    date: new Date(), credit: ' ', debit: amount, balance: bal,
  });
};

SaveTransactions.prototype.withdrawal = function(amount, transaction, bal) {
  transaction.push({
    date: new Date(), credit: amount, debit: ' ', balance: bal,
  });
};

module.exports = SaveTransactions;
