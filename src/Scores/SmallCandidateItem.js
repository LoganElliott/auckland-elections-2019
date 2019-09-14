import React from 'react';
import * as PropTypes from 'prop-types';

import { OverallGrade } from './OverallGrade';
import { CandidateName } from './CandidateName';
import { CandidateImage } from './CandidateImage';

const height = '175px';

const styles = {
  info: {
    display: 'flex',
    flex: 1,
    color: 'white',
    alignItems: 'center'
  },
  wrapper: {
    minHeight: height,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: '20px 0'
  }
};

const CandidateInfo = ({ candidate }) => (
  <div style={styles.info}>
    <CandidateImage candidate={candidate} />
    <OverallGrade overallGrade={candidate.overallGrade} />
  </div>
);

export const SmallCandidateItem = ({ candidate, colour, isLocalBoard }) => (
  <div
    style={{
      ...styles.wrapper
    }}
  >
    <CandidateInfo candidate={candidate} />
    <div style={{ backgroundColor: colour, flex: 1 }}>
      <CandidateName candidate={candidate} />
    </div>
  </div>
);

SmallCandidateItem.propTypes = {
  candidate: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    affiliation: PropTypes.string,
    overallGrade: PropTypes.string.isRequired
  }),
  colour: PropTypes.string.isRequired,
  isLocalBoard: PropTypes.bool
};
