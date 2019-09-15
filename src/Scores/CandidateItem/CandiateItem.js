import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { SmallCandidateItem } from './SmallCandidateItem';
import { BigCandidateItem } from './BigCandidateItem';

export const CandidateItem = ({ candidate, colour, type }) => {
  const showSmall = useMediaQuery({ query: '(max-width: 1150px)' });
  return showSmall ? (
    <SmallCandidateItem candidate={candidate} colour={colour} type={type} />
  ) : (
    <BigCandidateItem candidate={candidate} colour={colour} type={type} />
  );
};
