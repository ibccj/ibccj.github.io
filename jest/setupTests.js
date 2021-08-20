process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';

window.scrollTo = () => undefined;

jest.mock('next/config');
