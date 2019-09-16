import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { useMediaQuery } from 'react-responsive';

import history from '../history';

import { Colours } from '../Contants/Colours';

import { ReactComponent as GzLogo } from './gz.svg';
import { AddressSearcher } from '../AddressSearcher';
import { MyContext } from '../MyContext';
import { about, howWeScored, root, thanks } from '../Contants/routes';

const styles = {
  wrapper: {
    flexWrap: 'wrap',
    backgroundColor: Colours.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  smallWrapper: {
    flexWrap: 'wrap',
    backgroundColor: Colours.main,
    display: 'flex',
    alignItems: 'center',
    padding: '8px'
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
  },
  smallHeading: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between'
  }
};

const PageMenu = ({ updateAddress }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => setAnchorEl(event.currentTarget);

  const handleClose = route => {
    if (typeof route === 'string') {
      history.push(route + history.location.search);
    }
    setAnchorEl(null);
  };

  return (
    <>
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
        <MenuItem onClick={() => handleClose(thanks)}>Thanks!</MenuItem>
      </Menu>
    </>
  );
};

const SmallHeader = ({ address, updateAddress }) => (
  <div style={styles.wrapper}>
    <div style={styles.smallHeading}>
      <GzLogo style={styles.logo} />
      <PageMenu updateAddress={updateAddress} />
    </div>
    {address || history.location.pathname.substring(1).length > 0 ? (
      <AddressSearcher address={address} />
    ) : null}
  </div>
);

const BigHeader = ({ address, updateAddress }) => (
  <div style={styles.wrapper}>
    <GzLogo style={styles.logo} />
    {address || history.location.pathname.substring(1).length > 0 ? (
      <AddressSearcher address={address} />
    ) : null}
    <PageMenu updateAddress={updateAddress} />
  </div>
);

export const Header = () => {
  const showSmall = useMediaQuery({ query: '(max-width: 900px)' });

  return (
    <MyContext.Consumer>
      {({ address, updateAddress }) =>
        showSmall ? (
          <SmallHeader address={address} updateAddress={updateAddress} />
        ) : (
          <BigHeader address={address} updateAddress={updateAddress} />
        )
      }
    </MyContext.Consumer>
  );
};
