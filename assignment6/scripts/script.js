let wealth = document.getElementById('wealth');
let income = document.getElementById('income')
let tax = document.getElementById('tax');

function calcTax() {
    tax.value = (0.35 * income.value) + (0.25 * wealth.value);
}
