import React from 'react';

import './contents.css';
import { AddressSearcher } from './AddressSearcher/AddressSearcher';

const styles = {
  mediumFont: {
    fontSize: '80px',
    fontWeight: 900,
    color: 'white'
  },
  largeFont: {
    fontSize: '180px',
    fontWeight: 900,
    color: 'white'
  },
  yellowFont: {
    fontSize: '40px',
    fontWeight: 700,
    color: '#F0C325'
  },
  voteForWrapper: {},
  infoTextWrapper: {
    display: 'flex',
    color: 'white',
    fontSize: '20px',
    width: '340px'
  },
  infoText: {
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '30px'
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%'
  }
};

const WhoWillYouVoteFor = () => (
  <div style={styles.voteForWrapper}>
    <div style={styles.mediumFont}>WHO WILL</div>
    <div style={styles.largeFont}>YOU</div>
    <div style={styles.mediumFont}>VOTE FOR?</div>
    <div style={styles.yellowFont}>20TH SEPT - 12 OCT 2019</div>
  </div>
);

const text =
  "We asked candidates for council the same 14 questions on Transport, Housing and the Environment. We gave them points based on how well they answered and how they matched Generation Zero's vision for a liveable low-carbon Tāmaki Makaurau - Auckland";

const InfoText = () => (
  <div style={styles.infoTextWrapper}>
    <div style={styles.infoText}>{text}</div>
  </div>
);

export const Contents = () => {
  return (
    <div className="container">
      <div style={styles.wrapper}>
        <WhoWillYouVoteFor />
        <div>
          <InfoText />
          <AddressSearcher />
        </div>
      </div>
    </div>
  );
};
