import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('BodySectionWithMarginBottom tests', () => {
  it('should render BodySection with margin bottom', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>Test Content</p> {}
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find(BodySection).prop('title')).toEqual('test title');
    expect(wrapper.find(BodySection).contains(<p>Test Content</p>)).toBe(true);
  });
});