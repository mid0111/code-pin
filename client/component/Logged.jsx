import React, { PropTypes, Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import muiThemeable from 'material-ui/styles/muiThemeable';

class Logged extends Component {

  constructor(props) {
    super(props);
    this.handleOnRequestChange = this.handleOnRequestChange.bind(this);
  }

  handleOnRequestChange(value) {
    if (value === 1) {
      this.props.onLogoutClick();
    }
  }

  render() {
    const { user, muiTheme } = this.props;
    const style = {
      labelStyle: {
        color: muiTheme.palette.alternateTextColor,
      },
      iconStyle: {
        fill: muiTheme.palette.alternateTextColor,
      },
      underlineStyle: {
        display: 'none',
      },
    };

    return (
      <DropDownMenu
        value={0}
        onChange={this.handleOnRequestChange}
        {...style}
      >
        <MenuItem value={0} primaryText={user.name} disabled />
        <MenuItem value={1} primaryText="Sign Out" />
      </DropDownMenu>
    );
  }
}

Logged.propTypes = {
  onLogoutClick: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
  muiTheme: PropTypes.shape({}),
};

export default muiThemeable()(Logged);
