import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

import { getScores } from './getScores';
import { candidateType, councillorColour } from './constants';
import { ScoreHeading } from './CandidateItem/ScoreHeading';
import { scrollToCandidate } from './utilities';
import { CandidateItems } from './CandidateItems';

const styles = {
  councillor: {
    color: councillorColour
  }
};
export class CouncillorScores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wardCandidates: [],
      isLoading: false
    };
  }

  async componentDidMount() {
    await this.getCouncillorScores();
  }

  async componentDidUpdate({ ward }) {
    if (ward !== this.props.ward) {
      await this.getCouncillorScores();
    }

    scrollToCandidate();
  }

  async getCouncillorScores() {
    this.setState({ isLoading: true });
    const encodedWard = encodeURIComponent(this.props.ward);
    const scores = await getScores(`sheet=councillor&ward=${encodedWard}`);
    this.setState({
      wardCandidates: scores.councillorsScores,
      isLoading: false
    });
  }

  render() {
    const { ward } = this.props;
    return (
      <div>
        <ScoreHeading>
          <div>
            SCORES FOR <span style={styles.councillor}>COUNCILLOR</span> ({ward}
            )
          </div>
          <CandidateItems
            isLoading={this.state.isLoading}
            type={candidateType.WARD}
            colour={councillorColour}
            candidates={this.state.wardCandidates}
          />
        </ScoreHeading>
      </div>
    );
  }
}

CouncillorScores.propTypes = { ward: PropTypes.any };
