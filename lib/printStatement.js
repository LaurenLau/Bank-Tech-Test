function PrintStatement() {
}


PrintStatement.prototype.convertTransaction = function(transactions, statement) {
  transactions.forEach((x) => {
    statement.push(`${x.date.toDateString()} || ${x.credit} || £${x.debit} || £${x.balance}`);
  });
};

module.exports = PrintStatement;
