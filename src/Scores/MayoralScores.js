import React, { Component } from 'react';

import { getScores } from './getScores';
import { CandidateItem } from './CandiateItem';
import { mayoralColour } from './constants';
import { ScoreHeading } from './ScoreHeading';

const styles = {};

export class MayoralScores extends Component {
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
        <ScoreHeading>
          <div>
            SCORES FOR <span style={styles.mayor}>Mayor</span>
          </div>
          <div>
            {this.state.mayoralCandidates.map(candidate => (
              <CandidateItem
                candidate={candidate}
                key={candidate.firstName + candidate.surname}
                colour={mayoralColour}
              />
            ))}
          </div>
        </ScoreHeading>
      </div>
    );
  }
}
