import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../../../client/component/App';

describe('<App />', () => {
  it('should render Header', () => {
    const wrapper = shallow(
      <App />
    );
    const Header = wrapper.find('Header');
    expect(Header.props().title).to.be.a('string');
    expect(Header.props().title).to.have.length.above(1);
  });
});
