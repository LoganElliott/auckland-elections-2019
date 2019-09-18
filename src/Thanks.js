import React from 'react';
import { localBoardColour } from './Scores/constants';

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    minHeight: '100vh',
    padding: '8px',
    backgroundColor: localBoardColour
  },
  innerWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    maxWidth: '700px'
  }
};
export const Thanks = () => (
  <div style={styles.wrapper}>
    <h1>💗 Thanks! 💗</h1>

    <div style={styles.innerWrapper}>
      <div>
        <p>
          Thank you to everyone who has helped with the Auckland Elections 2019
        </p>
        <p>
          Thank you to all our volunteers, especially those who interviewed
          candidates, those who marked, those who moderated and those who gave
          support however they could
        </p>
        <p>
          Thank you to all our donors, without you we wouldn't be able to get
          the word out about our election score cards!
        </p>
        <p>Thank you to our designers, Bela, Finn and Rosie</p>
        <p>
          Thank you to our web developer Logan and backend developer Asher for
          making this website
        </p>
        Any questions, comments or problems email us at{' '}
        <a href="mailto: auckland@generationzero.org.nz">
          auckland@generationzero.org.nz
        </a>
        !
        <p>
          If you've found this site useful please{' '}
          <a href="https://www.generationzero.org/auckland-election-donation">
            Donate
          </a>{' '}
          as it helps us share with others!
        </p>
      </div>
    </div>
  </div>
);
