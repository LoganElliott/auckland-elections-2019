import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import { Colours } from '../Contants/Colours';

import { ReactComponent as GzLogo } from './gz.svg';
import { AddressSearcher } from '../AddressSearcher';
import { AddressContext } from '../AddressContext';

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

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <AddressContext.Consumer>
      {({ address }) => {
        console.log('address', address);
        return (
          <div style={styles.wrapper}>
            <GzLogo style={styles.logo} />
            {address.value ? <AddressSearcher address={address} /> : null}
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
              <MenuItem onClick={handleClose}>Home</MenuItem>
              <MenuItem onClick={handleClose}>How we scored</MenuItem>
              <MenuItem onClick={handleClose}>About us</MenuItem>
            </Menu>
          </div>
        );
      }}
    </AddressContext.Consumer>
  );
};
