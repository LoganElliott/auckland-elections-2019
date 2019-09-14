import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { SmallCandidateItem } from './SmallCandidateItem';
import { BigCandidateItem } from './BigCandidateItem';

export const CandidateItem = ({ candidate, colour, isLocalBoard }) => {
  const showSmall = useMediaQuery({ query: '(max-width: 900px)' });
  return showSmall ? (
    <SmallCandidateItem
      candidate={candidate}
      colour={colour}
      isLocalBoard={isLocalBoard}
    />
  ) : (
    <BigCandidateItem
      candidate={candidate}
      colour={colour}
      isLocalBoard={isLocalBoard}
    />
  );
};
