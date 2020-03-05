/* eslint-disable import/extensions */
import Big from 'big.js';

const operate = (num1, num2, operation) => {
  const n1 = new Big(num1);
  const n2 = new Big(num2);
  switch (operation) {
    case '+':
      return n1.plus(n2).toString();
    case '-':
      return n1.minus(n2).toString();
    case 'x':
      return n1.times(n2).toString();
    case '÷':
      if (n2 === 0) {
        return '0';
      }
      return n1.div(n2).toString();
    case '%':
      return n1.mod(n2).toString();
    default:
      break;
  }
  return null;
};

export default operate;
