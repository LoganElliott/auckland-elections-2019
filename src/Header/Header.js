import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { useMediaQuery } from 'react-responsive';

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon,
  EmailIcon
} from 'react-share';

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

const Sharing = () => {
  const title =
    'See how Generation Zero scored your representatives on Transport, Urban From and the environment #aucklandelections';
  const shareUrl = 'https://aucklandelections.co.nz';
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
      <FacebookShareButton url={shareUrl} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton url={shareUrl} windowWidth={750} windowHeight={600}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <RedditShareButton
        url={shareUrl}
        title={title}
        windowWidth={660}
        windowHeight={460}
      >
        <RedditIcon size={32} round />
      </RedditShareButton>
      <EmailShareButton url={shareUrl} subject={title} body="Go to">
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  );
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
        <Icon color="secondary">menu</Icon>
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
        <MenuItem onClick={() => handleClose(about)}>About</MenuItem>
        <MenuItem onClick={() => handleClose(thanks)}>Thanks!</MenuItem>
      </Menu>
    </>
  );
};

const SmallHeader = ({ address, updateAddress }) => (
  <div style={styles.wrapper}>
    <div style={styles.smallHeading}>
      <GzLogo style={styles.logo} />
      <Sharing />
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
    <Sharing />
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
