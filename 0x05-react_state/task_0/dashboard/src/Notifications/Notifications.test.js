import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

describe('rendering components', () => {
  it('renders the right html', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'default', html: getLatestNotification() },
    ];

    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );

    const firstItem = wrapper.find(NotificationItem).at(0);
    const secondItem = wrapper.find(NotificationItem).at(1);
    const thirdItem = wrapper.find(NotificationItem).at(2);

    expect(firstItem.prop('type')).toEqual('default');
    expect(firstItem.prop('value')).toEqual('New course available');

    expect(secondItem.prop('type')).toEqual('urgent');
    expect(secondItem.prop('value')).toEqual('New resume available');

    expect(thirdItem.prop('type')).toEqual('default');
    expect(thirdItem.prop('html')).toEqual(getLatestNotification());
  });

  it('checks Notifications renders correctly if passed an empty array or listNotifications not passed', () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={[]} />
    );

    const listItem = wrapper.find(NotificationItem).at(0);

    expect(listItem.prop('type')).toEqual('default');
    expect(listItem.prop('value')).toEqual('No new notification for now');
  });

  it('should call handleDisplayDrawer when menu item clicked', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Notifications handleDisplayDrawer={mockFn} />);

    wrapper.find('.menuItem').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  it('should call handleHideDrawer when close button is clicked', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(
      <Notifications displayDrawer={true} handleHideDrawer={mockFn} />
    );

    wrapper.find('button').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
