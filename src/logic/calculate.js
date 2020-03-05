import operate from './operate';

const calculate = (object, buttonName) => {
  const { total, next, operation } = object;
  switch (buttonName) {
    case 'AC':
      return {
        total: null,
        next: null,
        operation: null,
      };
    case '+/-':
      if (next) {
        return {
          next: (-1 * parseFloat(next)).toString(),
        };
        if (total) {
          return { total: (-1 * parseFloat(total)).toString() };
        }
      }
    case '+':
    case '-':
    case 'x':
    case '÷':
    case '%':
      return {
        total: operate(total, next, operation),
        next: null,
        operation: buttonName,
      };
    case '=':
      if (!next || !operation) {
        return null;
      } {
        return {
          total: operate(total, next, operation),
          next: null,
          operation: null,
        };
      }
    case '.':
      if (next) {
        return { total, next: `${next}.`, operation };
      }
      if (total) {
        return { total: `${total}.`, next, operation };
      }
      return { total: '0.', next, operation };

    default:
      if (operation) {
        return {
          total, next: next ? next + buttonName : buttonName, operation,
        };
      }
      return { total: total ? total + buttonName : buttonName, next, operation };
  }
};

export default calculate;
