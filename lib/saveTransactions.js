'use strict';

const moment = require('moment');
moment.locale('en-gb');

function SaveTransactions() {
}

SaveTransactions.prototype.deposit = function(amount, transaction, bal) {
  transaction.push({
    date: moment().format('L'), credit: 0, debit: amount, balance: bal,
  });
};

SaveTransactions.prototype.withdrawal = function(amount, transaction, bal) {
  transaction.push({
    date: moment().format('L'), credit: amount, debit: 0, balance: bal,
  });
};

module.exports = SaveTransactions;
