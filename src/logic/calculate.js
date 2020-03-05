import operate from './operate';

const calculate = (object, buttonName) => {
  const { total, next, operation } = object;
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  try {
    if (buttonName === 'AC') {
      return {
        total: null,
        next: null,
        operation: null,
      };
    }

    if (numbers.includes(buttonName)) {
      if (buttonName === '0' && next === '0') {
        return {};
      }
      return { next: next ? next + buttonName : buttonName };
    }

    if (buttonName === '=') {
      if (next && operation) {
        return {
          total: operate(total, next, operation),
          next: null,
          operation: null,
        };
      }
      return {};
    }

    if (buttonName === '.') {
      if (next) {
        if (next.includes('.')) {
          return {};
        }
        return { next: `${next}.` };
      }
      return { next: '0.' };
    }

    if (buttonName === '+/-') {
      if (next) {
        return { next: -1 * next.toString() };
      }
      if (total) {
        return { total: -1 * total.toString() };
      }
    }
    if (!next && !total) {
      return {};
    }


    if (operation) {
      if (!next) {
        return {
          operation: buttonName,
        };
      }
      return {
        total: operate(total, next, operation),
        next: null,
        operation: buttonName,
      };
    }

    return {
      total: next,
      next: null,
      operation: buttonName,
    };
  } catch (e) {
    return {
      total: 'E',
    };
  }
};

export default calculate;
