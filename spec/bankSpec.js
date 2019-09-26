const moment = require('moment');
moment.locale('en-gb');

describe('Bank', () => {
  const Bank = require('../lib/bank');

  let bank;

  beforeEach(() => {
    bank = new Bank();
  });

  it('has a default balance of £0', () => {
    expect(bank.balance).toBe(0);
  });

  it('deposits money into the account', () => {
    bank.deposit(200);
    expect(bank.balance).toBe(200);
  });

  describe('withdrawals', () => {
    it('withdraws money from the account', () => {
      bank.deposit(100);
      bank.withdraw(50);
      expect(bank.balance).toBe(50);
    });

    it('cannot withdraw an amount larger than the current balance', () => {
      bank.deposit(100);
      expect(bank.withdraw(101)).toBe('Not enough money');
    });
  });

  describe('showStatement', () => {
    const currentDate = moment().format('L');

    it('can show an empty bank statement', () => {
      expect(bank.showStatement()).toMatch(
          '    date    || credit || debit || balance '
      );
    });

    it('can show one transaction', () => {
      bank.deposit(100);
      expect(bank.showStatement()).toMatch(
          '    date    || credit || debit || balance \n' +
        ` ${currentDate} ||        ||  £100 || £100 `
      );
    });

    it('can show multiple transactions in order', () => {
      bank.deposit(1500);
      bank.deposit(200);
      bank.withdraw(450);
      bank.deposit(50);
      expect(bank.showStatement()).toMatch(
          `    date    || credit || debit || balance \n` +
        ` ${currentDate} ||      || £50 || £1300 \n` +
        ` ${currentDate} || £450 ||      || £1250 \n` +
        ` ${currentDate} ||      ||  £200 || £1700 \n` +
        ` ${currentDate} ||      ||  £1500 || £1500 \n`
      );
    });
  });
});
