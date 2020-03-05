import Big from 'big.js';

import operate from './operate';

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const calculate = (object, buttonName) => {
  try {
    if (buttonName === 'AC') {
      return {
        total: null,
        next: null,
        operation: null,
      };
    }

    if (numbers.includes(buttonName)) {
      if (buttonName === '0' && object.next === '0') {
        return {};
      }

      if (object.operation) {
        if (object.next) {
          return { next: object.next + buttonName };
        }
        return { next: buttonName };
      }
      if (object.next) {
        const next = object.next === '0' ? buttonName : object.next + buttonName;
        return {
          next,
          total: null,
        };
      }
      return {
        next: buttonName,
        total: null,
      };
    }


    if (buttonName === '.') {
      if (object.next) {
        if (object.next.includes('.')) {
          return {};
        }
        return { next: `${object.next}.` };
      }
      return { next: '0.' };
    }

    if (buttonName === '=') {
      if (object.next && object.operation) {
        return {
          total: operate(object.total, object.next, object.operation),
          next: null,
          operation: null,
        };
      }
      return {};
    }
    if (buttonName === '+/-') {
      if (object.next) {
        return { next: -1 * object.next.toString() };
      }
      if (object.total) {
        return { total: -1 * object.total.toString() };
      }
    }
    if (!object.next && !object.total) {
      return {};
    }

    if (object.operation) {
      return {
        total: operate(object.total, object.next, object.operation),
        next: null,
        operation: buttonName,
      };
    }

    if (!object.next) {
      return { operation: buttonName };
    }

    return {
      total: object.next,
      next: null,
      operation: buttonName,
    };
  } catch {
    return {
      total: 'Error',
    };
  }
};

export default calculate;
