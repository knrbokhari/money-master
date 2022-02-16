function inputChacking(inputFields, field) {
    const input = document.getElementById(inputFields);
    if (isNaN(input.value) == false) {
        if (0 <= input.value) {
            return input.value;
        }
        else {
            return alert("Give a prime number on " + field + ' field')
        }
    }
    else {
        return alert('please give only number on ' + field + ' field')
    }
}
document.getElementById('calculate').addEventListener("click", function () {
    // get all input value
    const income = inputChacking('income-field', 'income');
    const food = inputChacking('foot-field', 'food');
    const rent = inputChacking('rent-field', 'remt');
    const clothes = inputChacking('clothes-field', 'clothes');

    const totalExpenses = document.getElementById('total-expenses');
    const expenses = parseInt(food) + parseInt(rent) + parseInt(clothes);


    const balance = document.getElementById('balance');


    if (expenses <= income) {
        totalExpenses.innerText = expenses;
        balance.innerText = parseInt(income) - expenses;
    }
    else if (income < expenses) {
        alert('your total expenses is higher then income')
    }
    else {
        alert("give valid data")
    }

})

document.getElementById('saving').addEventListener('click', function () {
    const savingPercent = inputChacking('percent-input', 'save');
})