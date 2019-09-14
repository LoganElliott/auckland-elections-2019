import React from 'react';
import { useMediaQuery } from 'react-responsive';

import './contents.css';
import { BigContent } from './BigContent';
import { SmallContents } from './SmallContent';
import history from '../history';

export const Contents = () => {
  const showSmall = useMediaQuery({ query: '(max-width: 900px)' });

  if (history.location.search) {
    history.push({
      pathname: '',
      search: ''
    });
  }

  return showSmall ? <SmallContents /> : <BigContent />;
};
