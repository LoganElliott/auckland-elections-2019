import React, { Component } from 'react';

import { getScores } from './getScores';
import { CandidateItem } from './CandiateItem';
import { mayoralColour } from './constants';
import { ScoreHeading } from './ScoreHeading';
import { CircularProgress } from '@material-ui/core';

const styles = {};

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
            SCORES FOR <span style={styles.mayor}>Mayor</span>
          </div>
          <div>
            {!this.state.isLoading ? (
              this.state.mayoralCandidates.map(candidate => (
                <CandidateItem
                  candidate={candidate}
                  key={candidate.firstName + candidate.surname}
                  colour={mayoralColour}
                />
              ))
            ) : (
              <CircularProgress size={200} />
            )}
          </div>
        </ScoreHeading>
      </div>
    );
  }
}
