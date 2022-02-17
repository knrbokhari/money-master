// input chacking
function inputChacking(inputFields, field) {
    const input = document.getElementById(inputFields);
    if (isNaN(input.value) == false) {
        if (0 <= input.value) {
            return input.value;
        }
        else {
            alert("Give a prime number in " + field + ' field');
            input.value = '';
        }
    }
    else {
        alert('please give only number in ' + field + ' field');
        input.value = '';
    }
}

// calculating balances
function calculatingBalances(expensesOrSaving, totals, balances, errorAlert, isRemainingBalance) {
    const income = inputChacking('income-field', 'income');
    const balance = document.getElementById('balance');


    if (expensesOrSaving <= income) {
        totals.innerText = expensesOrSaving;
        if (isRemainingBalance == false) {
            balances.innerText = income - expensesOrSaving;
        }
        else {
            balances.innerText = balance.innerText - expensesOrSaving;
        }
    }
    else {
        alert("Please Provide valid information.");
    }
}

// income and expenses calculating
document.getElementById('calculate').addEventListener("click", function () {
    // get all input value from function
    const food = inputChacking('foot-field', 'food');
    const rent = inputChacking('rent-field', 'remt');
    const clothes = inputChacking('clothes-field', 'clothes');

    // getting Total Expenses & Balance from html
    const totalExpenses = document.getElementById('total-expenses');
    const balance = document.getElementById('balance');

    // Getting Total Expenses
    const expenses = parseInt(food) + parseInt(rent) + parseInt(clothes);

    // calling calculatingBalances function
    calculatingBalances(expenses, totalExpenses, balance, 'expenses', false);
});

// saving and Remaining Balance calculating
document.getElementById('saving').addEventListener('click', function () {
    // get input value from function
    const income = inputChacking('income-field', 'income');
    const savingPercent = inputChacking('percent-input', 'save');

    // getting Saving Amount, Remaining Balance & Balance from html
    const totalSaving = document.getElementById('saving-amount');
    const remainingBalance = document.getElementById('remaining-balance');
    const balance = document.getElementById('balance');

    // Getting Total saving value
    const saving = Number((income / 100 * savingPercent).toFixed(2));

    // Getting remaining balance value
    const remainingBalances = Number((balance.innerText - saving).toFixed(2));

    // calling calculatingBalances function
    if (0 <= remainingBalances) {
        calculatingBalances(saving, totalSaving, remainingBalance, 'savings', true);
    }
    else if (0 > remainingBalances) {
        alert('Please Provide valid information.');
    }
});