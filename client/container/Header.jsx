import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

import Login from '../component/Login';
import Logged from '../component/Logged';

const isLogin = true;
const onLoginClick = () => {
};
const onLogoutClick = () => {
};
const user = {
  name: 'mid0111',
};

const Header = ({ title }) => (
  <AppBar
    title={title}
    iconElementLeft={<IconButton><FontIcon className="fa fa-coffee" /></IconButton>}
    iconElementRight={isLogin ?
      <Logged onLogoutClick={onLogoutClick} user={user} /> : <Login onLoginClick={onLoginClick} />}
  />
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
