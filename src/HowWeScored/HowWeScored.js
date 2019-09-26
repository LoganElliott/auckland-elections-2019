import React from 'react';

import { Transport } from './Transport';
import { UrbanForm } from './UrbanForm';
import { Environment } from './Environment';
import { Competency } from './Competency';
import ReactGA from 'react-ga';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '12px'
  }
};
export const HowWeScored = () => {
  ReactGA.event({
    category: `HowWeScored`,
    action: `OnPageLoad`
  });

  return (
    <div>
      <div style={styles.wrapper}>
        <h1>How We Scored</h1>
        <p style={{ maxWidth: '700px' }}>
          Candidates were interviewed with a set list of questions and scored
          based on how their answers align with the mission of Generation Zero.
          To more fully understand the scoring breakdown and why candidates
          received the rating they did, have a look below to find examples of
          both high and low scoring answers for each question.
        </p>
      </div>
      <Transport />
      <UrbanForm />
      <Environment />
      <Competency />
      <p>
        If you've found this site useful please{' '}
        <a href="https://www.generationzero.org/auckland-election-donation">
          Donate
        </a>{' '}
        as it helps us share with others!
      </p>
    </div>
  );
};
