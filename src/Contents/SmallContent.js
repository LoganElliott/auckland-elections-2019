import { text } from './Constants';
import React from 'react';
import { AddressSearcher } from '../AddressSearcher';

const styles = {
  mediumFont: {
    fontSize: '45px',
    fontWeight: 900,
    color: 'white'
  },
  largeFont: {
    fontSize: '110px',
    fontWeight: 900,
    color: 'white'
  },
  yellowFont: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#F0C325'
  },
  infoTextWrapper: {
    display: 'flex',
    color: 'white',
    fontSize: '20px',
    width: '310px',
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
    lineHeight: '45px'
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

export const SmallContents = () => (
  <div className="container">
    <div style={styles.wrapper}>
      <WhoWillYouVoteFor />
      <div>
        <div style={styles.findYour}>FIND YOUR VOTING AREA</div>
        <AddressSearcher />
        <InfoText />
      </div>
    </div>
  </div>
);
