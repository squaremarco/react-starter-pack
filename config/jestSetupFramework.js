import 'jest-styled-components';
import 'jest-localstorage-mock';

// https://medium.com/shark-bytes/type-checking-with-prop-types-in-jest-e0cd0dc92d5
const { error } = global.console;

const propTypeErrorThrow = (message, ...args) => {
  if (/(Invalid prop|Failed prop type)/gi.test(message)) {
    throw new Error(message);
  }

  error.apply(global.console, [message, ...args]);
};

global.console.error = propTypeErrorThrow;
