import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('should have displayDrawer state set to false by default', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('handleDisplayDrawer should set displayDrawer to true', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('handleHideDrawer should set displayDrawer to false', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });
});
