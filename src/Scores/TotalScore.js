import React from 'react';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '250px',
    margin: '32px'
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold'
  },
  score: {
    fontSize: '48px'
  }
};

export const TotalScore = ({ sectionTitle, score }) => (
  <div style={styles.wrapper}>
    <div style={styles.title}>{sectionTitle}</div>
    <div style={styles.score}>{Math.round(score)}%</div>
  </div>
);
