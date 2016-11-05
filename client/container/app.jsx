import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

require('font-awesome/css/font-awesome.css');

export default () => (
  <AppBar
    title="Code Pin"
    iconElementLeft={<IconButton><FontIcon className="fa fa-coffee" /></IconButton>}
  />
);

