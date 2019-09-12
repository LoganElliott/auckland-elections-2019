import React from 'react';
import { AddressSearcher } from '../AddressSearcher';
import { text } from './Constants';

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
  infoTextWrapper: {
    display: 'flex',
    color: 'white',
    fontSize: '20px',
    width: '340px',
    marginTop: '32px'
  },
  infoText: {
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '30px',
    marginBottom: '60'
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%',
    flexWrap: 'wrap'
  },
  findYour: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '45px',
    marginTop: '42px'
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

const InfoText = () => (
  <div style={styles.infoTextWrapper}>
    <div style={styles.infoText}>{text}</div>
  </div>
);

export const BigContent = () => (
  <div className="container">
    <div style={styles.wrapper}>
      <WhoWillYouVoteFor />
      <div>
        <InfoText />
        <div style={styles.findYour}>FIND YOUR VOTING AREA</div>
        <AddressSearcher />
      </div>
    </div>
  </div>
);
