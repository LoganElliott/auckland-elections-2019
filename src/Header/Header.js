import React from 'react';
import { Colours } from '../Contants/Colours';

import { ReactComponent as GzLogo } from './gz.svg';

const styles = {
  wrapper: {
    backgroundColor: Colours.main
  },
  logo: {
    margin: '13px'
  }
};

export const Header = () => (
  <div style={styles.wrapper}>
    <GzLogo style={styles.logo} />
  </div>
);
