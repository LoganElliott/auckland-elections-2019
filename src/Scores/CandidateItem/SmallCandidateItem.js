import React from 'react';
import * as PropTypes from 'prop-types';

import { OverallGrade } from './OverallGrade';
import { CandidateName } from './CandidateName';
import { CandidateImage } from './CandidateImage';
import { SmallBreakdown } from './SmallBreakdown';

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
    margin: '20px 0',
    maxWidth: '100%'
  },
  infoWrapper: {
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    maxWidth: '100%'
  },
  name: {
    flex: 1,
    minWidth: '250px'
  }
};

const CandidateInfo = ({ candidate }) => (
  <div style={styles.info}>
    <CandidateImage candidate={candidate} />
    <OverallGrade overallGrade={candidate.overallGrade} />
  </div>
);

export const SmallCandidateItem = ({ candidate, colour, type }) => (
  <div
    style={{
      ...styles.wrapper
    }}
    id={`${type}-${candidate.surname}`}
  >
    <div style={styles.infoWrapper}>
      <CandidateInfo candidate={candidate} />
      <div style={{ ...styles.name, ...{ backgroundColor: colour } }}>
        <CandidateName candidate={candidate} />
      </div>
    </div>
    {candidate.overallGrade ? (
      <SmallBreakdown candidate={candidate} type={type} colour={colour} />
    ) : null}
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
