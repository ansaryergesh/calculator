/* eslint-disable import/extensions */
import Big from 'big.js';

const operate = (num1, num2, operation) => {
  const n1 = Big(num1);
  const n2 = Big(num2);
  switch (operation) {
    case '+':
      return n1.plus(n2);
    case '-':
      return n1.minus(n2);
    case 'X':
      return n1.times(n2);
    case '÷':
      if (n2 === 0) {
        break;
      }
      return n1.div(n2);
    default:
      return '0';
  }
  return null;
};


export default operate;
