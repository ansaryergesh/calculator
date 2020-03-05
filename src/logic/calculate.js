import operate from './operate';

const calculate = (object, buttonName) => {
  const { total, next, operation } = object;
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
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
    if (next) {
      return { next: next + buttonName };
    }
    if (next === null) {
      return { next: buttonName };
    }
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
      return { next: -1 * next };
    }
    if (total) {
      return { total: -1 * total };
    }
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
};

export default calculate;
