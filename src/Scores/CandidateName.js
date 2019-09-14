import React from 'react';

const styles = {
  nameWrapper: {
    margin: '18px',
    color: 'white'
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
  }
};

export const CandidateName = ({ candidate }) => (
  <div style={styles.nameWrapper}>
    <div style={styles.name}>{candidate.firstName}</div>
    <div style={styles.name}>{candidate.surname}</div>
    {candidate.affiliation ? (
      <div style={styles.affiliation}>{candidate.affiliation}</div>
    ) : null}
  </div>
);
