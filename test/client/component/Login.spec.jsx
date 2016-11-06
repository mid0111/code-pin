import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';

import { LoginComponent } from '../../../client/component/Login';

describe('<Login />', () => {
  const muiTheme = getMuiTheme();

  it('should call onLoginClick', () => {
    const onLoginClick = sinon.spy();
    const wrapper = shallow(
      <LoginComponent onLoginClick={onLoginClick} muiTheme={muiTheme} />
    );
    wrapper.find(FlatButton).simulate('touchTap');
    expect(onLoginClick.callCount).to.equal(1);
  });
});
