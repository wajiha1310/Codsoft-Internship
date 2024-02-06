function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function appendPercentage() {
  const currentValue = document.getElementById('display').value;
  const percentageValue = (parseFloat(currentValue) / 100).toString();
  document.getElementById('display').value = percentageValue;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
      let expression = document.getElementById('display').value;
      expression = expression.replace(/%/g, '*0.01*');
      document.getElementById('display').value = eval(expression);
  } catch (error) {
      document.getElementById('display').value = 'Error';
  }
}

