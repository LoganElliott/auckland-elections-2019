import React, { Component } from 'react';

import { getScores } from './getScores';
import { candidateType, mayoralColour } from './constants';
import { ScoreHeading } from './CandidateItem/ScoreHeading';
import { scrollToCandidate } from './utilities';
import { CandidateItems } from './CandidateItems';

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
          <CandidateItems
            isLoading={this.state.isLoading}
            type={candidateType.MAYOR}
            colour={mayoralColour}
            candidates={this.state.mayoralCandidates}
          />
        </ScoreHeading>
      </div>
    );
  }
}
