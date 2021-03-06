import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  width: '250px',
  margin: '16px'
};

export const QuestionScore = ({ question, score, isLocalBoard }) => (
  <div style={styles}>
    <div>{question}</div>
    <LinearProgress
      variant="determinate"
      value={score * (isLocalBoard ? 20 : 10)}
    />
  </div>
);
