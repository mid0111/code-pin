import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { LoggedComponent as Logged } from '../../../client/component/Logged';

describe('<Logged />', () => {
  const muiTheme = getMuiTheme();

  it('should render user name', () => {
    const onLogoutClick = sinon.spy();
    const user = {
      name: 'test user',
    };
    const wrapper = shallow(
      <Logged onLogoutClick={onLogoutClick} user={user} muiTheme={muiTheme} />
    );

    const menuItem = wrapper.find('MenuItem');

    expect(menuItem.at(0).prop('primaryText')).to.equal(user.name);
    expect(menuItem.at(0).prop('disabled')).to.equal(true);

    expect(menuItem.at(1).prop('primaryText')).to.equal('Sign Out');
  });
});
