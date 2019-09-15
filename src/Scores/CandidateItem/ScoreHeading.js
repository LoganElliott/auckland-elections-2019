import React from 'react';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '26px',
  fontWeight: 'bold',
  padding: '40px 0 40px 0',
  fontFamily: 'Oswald'
};

export const ScoreHeading = ({ children }) => (
  <div style={styles}>{children}</div>
);
