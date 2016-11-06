import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import muiThemeable from 'material-ui/styles/muiThemeable';

const Login = ({ onLoginClick, muiTheme }) => (
  <FlatButton
    label="Login"
    onTouchTap={onLoginClick}
    style={{
      height: `${muiTheme.spacing.desktopDrawerMenuItemHeight}px`,
      lineHeight: `${muiTheme.spacing.desktopDrawerMenuItemHeight}px`,
      color: muiTheme.palette.alternateTextColor,
    }}
  />
);

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  muiTheme: PropTypes.shape({}),
};

export default muiThemeable()(Login);
