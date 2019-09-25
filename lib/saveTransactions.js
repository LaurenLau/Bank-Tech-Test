/* saveTransactions.js */


function SaveTransactions() {
}

SaveTransactions.prototype.deposits = function(amount, trans, newBalance) {
  trans.push({
    date: new Date(), credit: ' ', debit: amount, balance: newBalance,
  });
};

SaveTransactions.prototype.withdrawals = function(amount, trans, newBalance) {
  trans.push({
    date: new Date(), credit: -amount, debit: '', balance: newBalance,
  });
};

module.exports = SaveTransactions;
