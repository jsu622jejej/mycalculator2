// Simulate Page Load
window.onload = () => {
  const loaderContainer = document.getElementById('loaderContainer');
  setTimeout(() => {
    loaderContainer.classList.add('hidden');
  }, 1500);
};

let currentInput = '';
let operator = null;
let previousInput = '';

function appendNumber(number) {
  if (currentInput.includes('.') && number === '.') return;
  currentInput += number;
  updateDisplay();
}

function appendOperator(op) {
  if (currentInput === '') return;
  if (previousInput !== '') calculateResult();
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculateResult() {
  if (operator === null || currentInput === '') return;
  currentInput = eval(previousInput + operator + currentInput).toString();
  operator = null;
  previousInput = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  operator = null;
  previousInput = '';
  updateDisplay();
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('current-value').innerText = currentInput || '0';
}

function toggleTheme() {
  document.body.classList.toggle('dar
