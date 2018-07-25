import mock from '../__tests__/mock';

const jwt = jest.fn();
jwt.verify = mock.asyncFn();
jwt.sign = mock.asyncFn();

export default jwt;
