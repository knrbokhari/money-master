// input chacking
function inputChacking(inputFields, field) {
    const input = document.getElementById(inputFields);
    if (isNaN(input.value) == false) {
        if (0 <= input.value) {
            return parseInt(input.value);
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
function calculatingBalances(expensesOrSaving, income, totals, balances, isRemainingBalance) {
    // getting balance from html
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
    else if (income <= expensesOrSaving) {
        alert('Your total expenses are higher than income.');
        totals.innerText = "00";
        if (isRemainingBalance == false) {
            balances.innerText = "00";
        }
        else {
            balances.innerText = "00";
        }
    }
    else if (isNaN(expensesOrSaving) == true) {
        alert("Please Provide valid information.");
    }
}

// income and expenses calculating
document.getElementById('calculate').addEventListener("click", function () {
    // get all input value from function
    const income = inputChacking('income-field', 'income');
    const food = inputChacking('foot-field', 'food');
    const rent = inputChacking('rent-field', 'remt');
    const clothes = inputChacking('clothes-field', 'clothes');

    // getting Total Expenses & Balance from html
    const totalExpenses = document.getElementById('total-expenses');
    const balance = document.getElementById('balance');

    // Getting Total Expenses
    const expenses = food + rent + clothes;

    // calling calculatingBalances function
    calculatingBalances(expenses, income, totalExpenses, balance, false);
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
        calculatingBalances(saving, income, totalSaving, remainingBalance, true);
    }
    else if (0 > remainingBalances) {
        alert('Your total savings is higher than balance.');
        totalSaving.innerText = "00";
        remainingBalance.innerText = "00";
    }
});