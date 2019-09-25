function SaveTransactions() {
}


SaveTransactions.prototype.deposits = function(amount, transactions, newBalance) {
  transactions.push({date: new Date(), credit: ' ', debit: amount, balance: newBalance})
}

SaveTransactions.prototype.withdrawals = function(amount, transactions, newBalance) {
  transactions.push({date: new Date(), credit: -amount, debit: '', balance: newBalance})
}


module.exports = SaveTransactions
