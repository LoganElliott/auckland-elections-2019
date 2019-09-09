import React from 'react';
import { ScoreHeading } from './ScoreHeading';

const styles = {};

export const LocalBoardScores = ({ localBoard }) => (
  <div>
    <ScoreHeading>
      SCORES FOR <span style={styles.localBoard}>LOCAL BOARD</span> (
      {localBoard})
    </ScoreHeading>
  </div>
);
