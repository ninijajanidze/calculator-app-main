const rangeInput = document.getElementById('range');
const container = document.querySelector('.container');

rangeInput.addEventListener('input', function() {
  const themeValue = parseInt(this.value);

  switch (themeValue) {
    case 1:
      container.classList.remove('theme-2', 'theme-3');
      break;
    case 2:
      container.classList.remove('theme-3');
      container.classList.add('theme-2');
      break;
    case 3:
      container.classList.remove('theme-2');
      container.classList.add('theme-3');
      break;
    default:
      container.classList.remove('theme-2', 'theme-3');
  }
});

document.addEventListener('DOMContentLoaded', function () {
    const resultNum = document.querySelector('.result-num');
    const buttons = document.querySelectorAll('.number, .operator, .reset, .count');
    let currentInput = '';
    let operatorClicked = false;
    let resetClicked = false;
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.textContent;
        
        if (value === 'RESET') {
          currentInput = '0';
          resetClicked = true;
        } else if (value === 'DEL') {
          currentInput = currentInput.slice(0, -1);
        } else if (value === '=') {
          currentInput = evaluateExpression(currentInput);
        } else {
          if (resetClicked && !isOperator(value)) {
            currentInput = value;
            resetClicked = false;
          } else {
            if (operatorClicked && isOperator(value)) {
              currentInput = currentInput.slice(0, -1) + value;
            } else {
              currentInput += value;
            }
          }
          operatorClicked = isOperator(value);
        }
        resultNum.textContent = currentInput;
      });
    });
  
    function isOperator(value) {
      return value === '+' || value === '-' || value === 'x' || value === '*' || value === '/';
    }
  
    function evaluateExpression(expression) {
      try {
        expression = expression.replace(/x/g, '*');
        let result = eval(expression);
  
        if (Number.isFinite(result) && !Number.isNaN(result)) {
          result = parseFloat(result.toFixed(10));
          return result.toString();
        } else {
          return 'Error';
        }
      } catch (error) {
        return 'Error';
      }
    }
  });
  
  
  
