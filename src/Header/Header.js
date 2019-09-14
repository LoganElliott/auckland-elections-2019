import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import history from '../history';

import { Colours } from '../Contants/Colours';

import { ReactComponent as GzLogo } from './gz.svg';
import { AddressSearcher } from '../AddressSearcher';
import { MyContext } from '../MyContext';
import { about, howWeScored, root } from '../Contants/routes';

const styles = {
  wrapper: {
    backgroundColor: Colours.main,
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    margin: '13px'
  },
  navWrapper: {
    display: 'inline-flex',
    flex: 1,
    justifyContent: 'flex-end'
  },
  navInner: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flex: 0.5
  },
  navItem: {
    display: 'flex',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '45px'
  }
};

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose(route) {
    if (typeof route === 'string') {
      history.push(route + history.location.search);
    }
    setAnchorEl(null);
  }

  return (
    <MyContext.Consumer>
      {({ address, updateAddress }) => (
        <div style={styles.wrapper}>
          <GzLogo style={styles.logo} />
          {address || history.location.pathname.substring(1).length > 0 ? (
            <AddressSearcher address={address} />
          ) : null}
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <Icon>menu</Icon>
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={() => {
                updateAddress(null);
                handleClose(root);
              }}
            >
              Home
            </MenuItem>
            <MenuItem onClick={() => handleClose(howWeScored)}>
              How we scored
            </MenuItem>
            <MenuItem onClick={() => handleClose(about)}>About us</MenuItem>
          </Menu>
        </div>
      )}
    </MyContext.Consumer>
  );
};
