import React from 'react';
import { MyContext } from '../MyContext';
import { MayoralScores } from './MayoralScores';
import { CouncillorScores } from './CouncillorScores';
import { LocalBoardScores } from './LocalBoardScores';
import { councillorColour, localBoardColour, mayoralColour } from './constants';
import history from '../history';

const styles = {
  wrapper: {
    background: '#E5E5E5'
  },
  header: {
    backgroundColor: 'black',
    color: 'white'
  },
  councillor: {
    color: councillorColour
  },
  mayor: {
    color: mayoralColour
  },
  localBoard: {
    color: localBoardColour
  }
};

const SubHeading = ({ ward, localBoard, subdivision }) => (
  <div style={styles.header}>
    <div
      style={{
        padding: '60px 0 60px 40px',
        fontFamily: 'Oswald',
        fontWeight: 'bold'
      }}
    >
      <div style={{ fontSize: '26px' }}>VOTING AREA</div>
      <div style={{ fontSize: '50px' }}>
        Ward: <span style={styles.councillor}>{ward}</span>
      </div>
      <div style={{ fontSize: '40px' }}>
        Local Board: <span style={styles.localBoard}> {localBoard}</span>
      </div>
      {subdivision ? (
        <div style={{ fontSize: '30px' }}>Subdivision: {subdivision}</div>
      ) : null}
      <div style={{ fontSize: '16px', fontFamily: 'Roboto' }}>
        We sat down and grilled each Auckland Council candidate one by one. Here
        are the results.
      </div>
    </div>
  </div>
);

export const Scores = () => {
  return (
    <MyContext.Consumer>
      {({ votingInformation }) => {
        if (!votingInformation) {
          history.push({
            path: '/'
          });
        }
        return (
          <div style={styles.wrapper}>
            <SubHeading
              ward={votingInformation.ward}
              localBoard={votingInformation.localBoard}
              subdivision={votingInformation.subdivision}
            />
            <MayoralScores />
            <CouncillorScores ward={votingInformation.ward} />
            <LocalBoardScores
              localBoard={votingInformation.localBoard}
              subdivision={votingInformation.subdivision}
            />
          </div>
        );
      }}
    </MyContext.Consumer>
  );
};
