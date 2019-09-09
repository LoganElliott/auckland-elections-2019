import React from 'react';
import * as PropTypes from 'prop-types';
import ReactImageFallback from 'react-image-fallback';

import { candidateImagesRoute } from '../Contants/routes';
import { ScoreBreakdown } from './ScoreBreakdown';

const height = '175px';

const styles = {
  info: {
    display: 'flex',
    color: 'white',
    alignItems: 'center'
  },
  nameWrapper: {
    margin: '32px'
  },
  name: {
    backgroundColor: 'black',
    fontSize: '48px',
    fontFamily: 'Oswald',
    fontWeight: 'bold',
    lineHeight: '48px',
    width: 'fit-content',
    padding: '3px'
  },
  affiliation: {
    fontFamily: 'Oswald',
    backgroundColor: 'black',
    fontSize: '16px',
    width: 'fit-content',
    padding: '3px'
  },
  wrapper: {
    maxWidth: '1000px',
    minHeight: height,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: '20px 0'
  },
  scoreWrapper: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    border: '5px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 20px',
    backgroundColor: 'white'
  },
  score: {
    fontWeight: 'bold',
    fontSize: '40px'
  },
  rightSide: {
    display: 'flex',
    alignItems: 'center',
    height
  }
};

const candidateImageUrl = candidate => {
  const lowerCaseFirstName = candidate.firstName.toLowerCase();
  const firstName =
    lowerCaseFirstName.charAt(0).toUpperCase() + lowerCaseFirstName.slice(1);

  const lowerCaseLastName = candidate.surname.toLowerCase();
  const lastName =
    lowerCaseLastName.charAt(0).toUpperCase() + lowerCaseLastName.slice(1);

  return `${firstName}-${lastName}.png`;
};

export const CandidateInfo = ({ candidate }) => (
  <div style={styles.info}>
    <ReactImageFallback
      height={175}
      width={175}
      src={`${process.env.PUBLIC_URL}
         ${candidateImagesRoute}/${candidateImageUrl(candidate)}`}
      fallbackImage={`${candidateImagesRoute}/missing.jpg`}
    />
    <div style={styles.nameWrapper}>
      <div style={styles.name}>{candidate.firstName}</div>
      <div style={styles.name}>{candidate.surname}</div>
      {candidate.affiliation ? (
        <div style={styles.affiliation}>{candidate.affiliation}</div>
      ) : null}
    </div>
  </div>
);

export const CandidateItem = ({ candidate, colour }) => (
  <div style={styles.wrapper}>
    <div style={{ width: '500px' }}>
      <CandidateInfo candidate={candidate} />
    </div>
    <div style={{ ...styles.rightSide, backgroundColor: colour }}>
      <ScoreBreakdown candidate={candidate} colour={colour} />
      <div style={styles.scoreWrapper}>
        <div style={styles.score}>{candidate.overallGrade}</div>
      </div>
    </div>
  </div>
);

CandidateItem.propTypes = {
  candidate: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    affiliation: PropTypes.string,
    overallGrade: PropTypes.string.isRequired
  }),
  colour: PropTypes.string.isRequired
};
