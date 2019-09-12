import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import { getScores } from './getScores';
import { CandidateItem } from './CandiateItem';
import { councillorColour } from './constants';
import { ScoreHeading } from './ScoreHeading';

export class CouncillorScores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wardCandidates: [],
      isLoading: false
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    await this.getCouncillorScores();
    this.setState({ isLoading: false });
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
          {!this.state.isLoading ? (
            this.state.wardCandidates.map(candidate => (
              <CandidateItem
                candidate={candidate}
                key={candidate.firstName + candidate.surname}
                colour={councillorColour}
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

CouncillorScores.propTypes = { ward: PropTypes.any };
