
function Statement() {
}

Statement.prototype._print = function(transactions, statement) {
  transactions.forEach((x) => {
    if ( x.credit === 0 ) {
      statement.unshift(` ${x.date} ||      || £${x.debit} || £${x.balance} `);
    } else {
      statement.unshift(` ${x.date} || £${x.credit} ||      || £${x.balance} `);
    }
  });
  statement.unshift('    date    || credit || debit || balance ');
};

module.exports = Statement;
