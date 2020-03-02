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
          next: next *= -1,
        };
      }
    case '+':
    case '-':
    case 'x':
    case '÷':
      return {
        total: operate(total, next, operation),
        next: '',
        opeation: buttonName,
      };
    case '=':
      return {
        total: operate(total, next, operation),
        next: '',
        operation: '',
      };
    case '.':
      if (next) {
        return { total, next: `${next}.`, operation };
      }
      if (total) {
        return { total: `${total}.`, next, operation };
      }
      return { total: '0.', next, operation };

    default:
      return { total, next, operation };
  }
};

export default calculate;
