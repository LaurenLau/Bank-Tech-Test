
function Statement() {
}


Statement.prototype.print = function(transactions, statement) {
  statement.push('    date    || credit || debit || balance ');
  transactions.forEach((x) => {
    if ( x.credit === 0 ) {
      statement.push(` ${x.date} ||        ||  £${x.debit} || £${x.balance} `);
    } else {
      statement.push(` ${x.date} || £${x.credit} ||        || £${x.balance} `);
    }
  });
};

module.exports = Statement;
