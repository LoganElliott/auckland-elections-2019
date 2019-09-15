import React from 'react';
import * as PropTypes from 'prop-types';

import { ScoreBreakdown } from './ScoreBreakdown';
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
  },
  rightSide: {
    display: 'flex',
    alignItems: 'center',
    height
  }
};

export const CandidateInfo = ({ candidate }) => (
  <div style={styles.info}>
    <CandidateImage candidate={candidate} />
    <CandidateName candidate={candidate} />
  </div>
);

export const BigCandidateItem = ({ candidate, colour, type }) => (
  <div
    style={{
      ...styles.wrapper,
      width: candidate.overallGrade ? '1000px' : 'fit-content',
      minWidth: '800px'
    }}
    id={`${type}-${candidate.surname}`}
  >
    <CandidateInfo candidate={candidate} />
    <div style={{ ...styles.rightSide, backgroundColor: colour }}>
      {candidate.overallGrade ? (
        <ScoreBreakdown candidate={candidate} colour={colour} type={type} />
      ) : null}
      <OverallGrade overallGrade={candidate.overallGrade} />
    </div>
  </div>
);

BigCandidateItem.propTypes = {
  candidate: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    affiliation: PropTypes.string,
    overallGrade: PropTypes.string.isRequired
  }),
  colour: PropTypes.string.isRequired,
  isLocalBoard: PropTypes.bool
};
