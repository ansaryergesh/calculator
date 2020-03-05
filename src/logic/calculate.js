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
    if (next) {
      return { next: next + buttonName };
    }

    if (!next) {
      return { next: buttonName };
    }

    if (buttonName === '0' && next === '0') {
      return {};
    }
    return {
      next: buttonName,
      total: null,
    };
  }
};
