import React from 'react';
import { useMediaQuery } from 'react-responsive';

import './contents.css';
import { BigContent } from './BigContent';
import { SmallContents } from './SmallContent';

export const Contents = () => {
  const showSmall = useMediaQuery({ query: '(max-width: 900px)' });

  return showSmall ? <SmallContents /> : <BigContent />;
};
