import operate from './operate';

const calculate = (object, buttonName) => {
  switch (buttonName) {
    case 'AC':
      return {
        total: null,
        next: null,
        operation: null,
      };
  }
  case '+/-':
      if(object.next){
      return{
        next: next *= -1,
      }
    }
  case '+':
  case '-':
  case 'x':
  case '÷':
    return {
        total: operate(object.total, object.next, object.opeation),
        next: '',
        opeation: buttonName,
    }
  case '=':
    return {
        total: operate(object.total, object.next, object.opeation),
        next: '',
        opeation: '',
    }
       
};
