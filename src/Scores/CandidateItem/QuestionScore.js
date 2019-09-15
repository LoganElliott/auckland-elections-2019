import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  width: '250px',
  margin: '16px'
};

export const QuestionScore = ({ question, score }) => (
  <div style={styles}>
    <div>{question}</div>
    <LinearProgress variant="determinate" value={score * 10} />
  </div>
);
