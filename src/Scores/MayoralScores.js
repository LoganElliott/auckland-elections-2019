import React, { Component } from 'react';

import { getScores } from './getScores';
import { CandidateItem } from './CandidateItem/CandiateItem';
import { candidateType, mayoralColour } from './constants';
import { ScoreHeading } from './CandidateItem/ScoreHeading';
import { CircularProgress } from '@material-ui/core';
import { scrollToCandidate } from './utilities';

const styles = {
  mayor: {
    color: mayoralColour
  }
};

export class MayoralScores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mayoralCandidates: [],
      isLoading: false
    };
  }

  async componentDidMount() {
    await this.getMayoralScores();

    scrollToCandidate();
  }

  async getMayoralScores() {
    this.setState({ isLoading: true });
    const scores = await getScores('sheet=mayoral');
    this.setState({
      mayoralCandidates: scores.mayoralScores,
      isLoading: false
    });
  }

  render() {
    return (
      <div>
        <ScoreHeading>
          <div>
            SCORES FOR <span style={styles.mayor}>MAYOR</span>
          </div>
          {!this.state.isLoading ? (
            this.state.mayoralCandidates.map(candidate => (
              <CandidateItem
                candidate={candidate}
                key={candidate.firstName + candidate.surname}
                colour={mayoralColour}
                type={candidateType.MAYOR}
              />
            ))
          ) : (
            <CircularProgress size={200} />
          )}
        </ScoreHeading>
      </div>
    );
  }
}
