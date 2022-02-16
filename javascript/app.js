function inputChacking(inputFields, field) {
    const input = document.getElementById(inputFields);
    if (isNaN(input.value) == false) {
        if (0 <= input.value) {
            return input.value;
        }
        else {
            return alert("Give a prime number in " + field + ' field')
        }
    }
    else {
        return alert('please give only number in ' + field + ' field')
    }
}
function calculatingBalances(expensesOrSaving, incomOrBalance, totals, balances, errorAlert) {

    if (expensesOrSaving <= incomOrBalance) {
        totals.innerText = expensesOrSaving;
        balances.innerText = incomOrBalance - expensesOrSaving;
    }
    else if (incomOrBalance < expensesOrSaving) {
        alert('Your total ' + errorAlert + ' are higher than your income.')
    }
    else {
        alert("Please Provide valid information.")
    }

}
document.getElementById('calculate').addEventListener("click", function () {
    // get all input value
    const income = inputChacking('income-field', 'income');
    const food = inputChacking('foot-field', 'food');
    const rent = inputChacking('rent-field', 'remt');
    const clothes = inputChacking('clothes-field', 'clothes');

    const totalExpenses = document.getElementById('total-expenses');
    const balance = document.getElementById('balance');

    const expenses = parseInt(food) + parseInt(rent) + parseInt(clothes);

    calculatingBalances(expenses, income, totalExpenses, balance, 'expenses');
})

document.getElementById('saving').addEventListener('click', function () {
    const savingPercent = inputChacking('percent-input', 'save');
    const totalSaving = document.getElementById('saving-amount');
    const remainingBalance = document.getElementById('remaining-balance');
    const balance = document.getElementById('balance');

    const saving = balance.innerText / 100 * savingPercent;

    if (0 < saving) {
        calculatingBalances(saving, balance.innerText, totalSaving, remainingBalance, 'savings');
    }
})