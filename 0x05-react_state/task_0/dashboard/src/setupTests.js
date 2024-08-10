import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { JSDOM } from 'jsdom';

configure({ adapter: new Adapter() });

if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = require('util').TextEncoder;
  global.TextDecoder = require('util').TextDecoder;
}
