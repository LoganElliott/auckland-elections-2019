import React from 'react';
import { MyContext } from '../MyContext';

const styles = {
  wrapper: {
    background: '#E5E5E5'
  },
  header: {
    backgroundColor: 'black',
    color: 'white'
  },
  councillor: {
    color: '#D7263D'
  },
  mayor: {
    color: '#3C2984'
  },
  localBoard: {
    color: '#FBBA72'
  },
  scoreHeading: {
    fontSize: '26px',
    fontWeight: 'bold',
    padding: '40px 0 40px 0',
    fontFamily: 'Oswald'
  }
};

const SubHeading = props => (
  <div style={styles.header}>
    <div
      style={{
        padding: '60px 0 60px 40px',
        fontFamily: 'Oswald',
        fontWeight: 'bold'
      }}
    >
      <div style={{ fontSize: '26px' }}>VOTING AREA</div>
      <div style={{ fontSize: '50px' }}>{props.ward}</div>
      <div style={{ fontSize: '40px' }}>{props.localBoard}</div>
      <div style={{ fontSize: '30px' }}>{props.subdivision}</div>
      <div style={{ fontSize: '16px', fontFamily: 'Roboto' }}>
        We sat down and grilled each Auckland Council candidate one by one. Here
        are the results.
      </div>
    </div>
  </div>
);

const CouncillerScores = ({ ward }) => (
  <div>
    <div style={styles.scoreHeading}>
      SCORES FOR <span style={styles.councillor}>COUNCILLOR</span> ({ward})
    </div>
  </div>
);

const MayorScores = () => (
  <div>
    <div style={styles.scoreHeading}>
      SCORES FOR <span style={styles.mayor}>Mayor</span>
    </div>
  </div>
);

const LocalBoardScores = ({ localBoard }) => (
  <div>
    <div style={styles.scoreHeading}>
      SCORES FOR <span style={styles.localBoard}>LOCAL BOARD</span> (
      {localBoard})
    </div>
  </div>
);

export const Scores = () => {
  return (
    <MyContext.Consumer>
      {({ votingInformation }) => {
        return (
          <div style={styles.wrapper}>
            <SubHeading {...votingInformation} />
            <MayorScores />
            <CouncillerScores ward={votingInformation.ward} />
            <LocalBoardScores localBoard={votingInformation.localBoard} />
          </div>
        );
      }}
    </MyContext.Consumer>
  );
};
