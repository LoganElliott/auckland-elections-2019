import React from 'react';

const styles = {
  scoreSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'black'
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
  }
};

export const OverallGrade = ({ overallGrade }) => (
  <div style={styles.scoreSection}>
    <div style={styles.scoreWrapper}>
      <div style={styles.score}>{overallGrade || '😞'}</div>
    </div>
    {overallGrade ? null : 'Declined interview'}
  </div>
);
