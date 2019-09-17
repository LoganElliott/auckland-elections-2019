import React from 'react';
import { localBoardColour } from './Scores/constants';

const styles = {
  wrapper: {
    padding: '12px',
    backgroundColor: localBoardColour,
    height: '100vh'
  },
  item: {
    padding: '12px 0'
  }
};
export const Thanks = () => (
  <div style={styles.wrapper}>
    <h1>Thanks!</h1>
    <div style={styles.item}>
      Thank you to everyone who has helped with the Auckland Elections 2019
    </div>
    <div style={styles.item}>
      Thank you to all our volunteers, especially those who interviewed
      candidates, those who marked, those who moderated and those who gave
      support however they could
    </div>
    <div style={styles.item}>
      Thank you to all our donors, without you we wouldn't be able to get the
      word out about our election score cards!
    </div>
    <div style={styles.item}>
      Thank you to our designers, Bela, Finn and Rosie
    </div>
    <div style={styles.item}>
      Thank you to our web developer Logan and backend developer Asher for
      making this website
    </div>

    <a href="mailto: auckland@generationzero.org.nz">
      Any questions, comments or problems email us!
    </a>
  </div>
);
