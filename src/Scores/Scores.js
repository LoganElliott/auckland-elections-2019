import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import * as PropTypes from 'prop-types';
import { MyContext } from '../MyContext';
import { scoresEndpoint } from '../Contants/endpoints';

const mayorColour = '#3C2984';
const councillorColour = '#D7263D';
const localBoardColour = '#FBBA72';

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
    color: mayorColour
  },
  localBoard: {
    color: localBoardColour
  },
  scoreHeading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '26px',
    fontWeight: 'bold',
    padding: '40px 0 40px 0',
    fontFamily: 'Oswald'
  },
  candidate: {
    info: {
      display: 'flex',
      backgroundColor: 'white',
      color: 'white',
      alignItems: 'center',
      width: '550px'
    },
    image: {
      width: '180px',
      height: '165px'
    },
    name: {
      backgroundColor: 'black',
      fontSize: '48px',
      fontFamily: 'Oswald',
      fontWeight: 'bold',
      lineHeight: '48px',
      width: 'fit-content',
      padding: '3px'
    },
    affiliation: {
      fontFamily: 'Oswald',
      backgroundColor: 'black',
      fontSize: '16px',
      width: 'fit-content',
      padding: '3px'
    },
    wrapper: {
      maxWidth: '1000px',
      minHeight: '165px',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      backgroundColor: 'white',
      margin: '20px 0'
    },
    button: {
      height: '62px',
      width: '254px'
    },
    scoreWrapper: {
      borderRadius: '50%',
      width: '100px',
      height: '100px',
      border: '5px solid black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 20px',
      backgroundColor: 'white'
    },
    score: {
      fontWeight: 'bold',
      fontSize: '40px'
    },
    rightSide: {
      display: 'flex',
      backgroundColor: mayorColour,
      alignItems: 'center',
      height: '165px'
    }
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
      {props.subdivision !== 'Area Outside' ? (
        <div style={{ fontSize: '30px' }}>{props.subdivision}</div>
      ) : null}
      <div style={{ fontSize: '16px', fontFamily: 'Roboto' }}>
        We sat down and grilled each Auckland Council candidate one by one. Here
        are the results.
      </div>
    </div>
  </div>
);

const getScores = async query => {
  const headers = new Headers();

  headers.append('Access-Control-Allow-Origin', '*');
  headers.append('Access-Control-Allow-Methods', 'POST');
  headers.append('Content-Type', 'application/json');

  const requestInit = {
    headers,
    method: 'GET'
  };

  const request = new Request(`${scoresEndpoint}/?${query}`, requestInit);

  const response = await fetch(request);
  return response.json();
};

const CandidateItem = ({ candidate }) => (
  <div style={styles.candidate.wrapper}>
    <div style={styles.candidate.info}>
      <div style={styles.candidate.image} />
      <div>
        <div style={styles.candidate.name}>{candidate.firstName}</div>
        <div style={styles.candidate.name}>{candidate.surname}</div>
        {candidate.affiliation ? (
          <div style={styles.candidate.affiliation}>
            {candidate.affiliation}
          </div>
        ) : null}
      </div>
    </div>
    <div style={styles.candidate.rightSide}>
      <Button variant="contained" style={styles.candidate.button}>
        SCORE BREAKDOWN
      </Button>
      <div style={styles.candidate.scoreWrapper}>
        <div style={styles.candidate.score}>{candidate.overallGrade}</div>
      </div>
    </div>
  </div>
);

class MayorScores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mayoralCandidates: []
    };
  }

  async componentDidMount() {
    await this.getMayoralScores();
  }

  async getMayoralScores() {
    const scores = await getScores('sheet=mayoral');
    this.setState({ mayoralCandidates: scores.mayoralScores });
  }

  render() {
    return (
      <div>
        <div style={styles.scoreHeading}>
          <div>
            SCORES FOR <span style={styles.mayor}>Mayor</span>
          </div>
          <div>
            {this.state.mayoralCandidates.map(candidate => (
              <CandidateItem
                candidate={candidate}
                key={candidate.firstName + candidate.surname}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

class CouncillerScores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wardCandidates: []
    };
  }

  async componentDidMount() {
    await this.getCouncillorScores();
  }

  async getCouncillorScores() {
    const encodedWard = encodeURIComponent(this.props.ward);
    const scores = await getScores(`sheet=councillor&ward=${encodedWard}`);
    this.setState({ wardCandidates: scores.councillorsScores });
  }

  render() {
    const { ward } = this.props;
    return (
      <div>
        <div style={styles.scoreHeading}>
          <div>
            SCORES FOR <span style={styles.councillor}>COUNCILLOR</span> ({ward}
            )
          </div>
          {this.state.wardCandidates.map(candidate => (
            <CandidateItem
              candidate={candidate}
              key={candidate.firstName + candidate.surname}
            />
          ))}
        </div>
      </div>
    );
  }
}

CouncillerScores.propTypes = { ward: PropTypes.any };

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
