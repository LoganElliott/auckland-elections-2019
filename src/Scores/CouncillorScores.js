import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { getScores } from './getScores';
import { CandidateItem } from './CandiateItem';
import { councillorColour } from './constants';
import { ScoreHeading } from './ScoreHeading';

export class CouncillorScores extends Component {
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
        <ScoreHeading>
          <div>
            SCORES FOR <span>COUNCILLOR</span> ({ward})
          </div>
          {this.state.wardCandidates.map(candidate => (
            <CandidateItem
              candidate={candidate}
              key={candidate.firstName + candidate.surname}
              colour={councillorColour}
            />
          ))}
        </ScoreHeading>
      </div>
    );
  }
}

CouncillorScores.propTypes = { ward: PropTypes.any };
