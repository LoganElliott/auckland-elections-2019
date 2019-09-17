import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { MyContext } from '../MyContext';
import { MayoralScores } from './MayoralScores';
import { CouncillorScores } from './CouncillorScores';
import { LocalBoardScores } from './LocalBoardScores';
import { councillorColour, localBoardColour, mayoralColour } from './constants';
import { root } from '../Contants/routes';

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

const renderVotingInfo = (ward, localBoard, subdivision) => {
  return (
    <Fragment>
      {ward || localBoard || subdivision ? (
        <div style={{ fontSize: '26px' }}>VOTING AREA</div>
      ) : null}
      {ward ? (
        <div style={{ fontSize: '50px' }}>
          Ward: <span style={styles.councillor}>{ward}</span>
        </div>
      ) : null}
      {localBoard ? (
        <div style={{ fontSize: '40px' }}>
          Local Board: <span style={styles.localBoard}> {localBoard}</span>
        </div>
      ) : null}
      {subdivision ? (
        <div style={{ fontSize: '30px' }}>
          Subdivision: <span style={styles.localBoard}> {subdivision}</span>
        </div>
      ) : null}
    </Fragment>
  );
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
      {renderVotingInfo(ward, localBoard, subdivision)}
      <div style={{ fontSize: '16px', fontFamily: 'Roboto' }}>
        We sat down and grilled each Auckland Council candidate one by one. Here
        are the results.
      </div>
    </div>
  </div>
);

export function Scores() {
  return (
    <MyContext.Consumer>
      {({ votingInformation }) => {
        if (!votingInformation) {
          return <Redirect to={root} />;
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
}
