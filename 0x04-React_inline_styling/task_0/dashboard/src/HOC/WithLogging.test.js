import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';

describe('WithLogging tests', () => {
  beforeAll(() => {
    global.console.log = jest.fn();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call console.log on mount and dismount', () => {
    const TestComponent = () => <div />;
    const WithLoggingComponent = WithLogging(TestComponent);
    const wrapper = mount(<WithLoggingComponent />);
    expect(console.log).toHaveBeenCalledWith('Component TestComponent is mounted');
    wrapper.unmount();
    expect(console.log).toHaveBeenCalledWith('Component TestComponent is going to unmount');
  });

  it('should log out the right message on mount and dismount', () => {
    const TestComponent = () => <div />;
    const WithLoggingComponent = WithLogging(TestComponent);
    const wrapper = mount(<WithLoggingComponent />);
    expect(console.log).toHaveBeenCalledWith('Component TestComponent is mounted');
    wrapper.unmount();
    expect(console.log).toHaveBeenCalledWith('Component TestComponent is going to unmount');
  });
});
