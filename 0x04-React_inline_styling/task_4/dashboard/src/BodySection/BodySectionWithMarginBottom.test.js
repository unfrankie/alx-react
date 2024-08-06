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

describe('BodySectionWithMarginBottom', () => {
	it('should render correctly', () => {
	  const wrapper = shallow(
		<BodySectionWithMarginBottom title="test title">
		  <p>test children node</p>
		</BodySectionWithMarginBottom>
	  );
  
	  expect(wrapper.find(BodySection)).toHaveLength(1);
	  expect(wrapper.find(BodySection).props().title).toEqual('test title');
	  expect(wrapper.find(BodySection).props().children).toEqual(<p>test children node</p>);
	});
  });