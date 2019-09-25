
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

  it('withdraws money from the account', () => {
    bank.deposit(100);
    bank.withdraw(50);
    expect(bank.balance).toBe(50);
  });

  it('cannot withdraw an amount larger than the current balance', () => {
    bank.deposit(100);
    expect(bank.withdraw(101)).toBe('Not enough money');
  });

  it('can show an empty bank statement', () => {
    expect(bank.showStatement()).toBe(
        '    date    || credit || debit || balance '
    );
  });

  it('can show one transaction', () => {
    bank.deposit(100);
    expect(bank.showStatement()).toBe(
        '    date    || credit || debit || balance \n' +
      ' 25/09/2019 ||        ||  £100 || £100 '
    );
  });
});
