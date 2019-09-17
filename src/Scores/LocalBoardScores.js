import React, { Component } from 'react';

import { ScoreHeading } from './CandidateItem/ScoreHeading';
import * as PropTypes from 'prop-types';
import { getScores } from './getScores';
import { candidateType, localBoardColour } from './constants';
import { scrollToCandidate } from './utilities';
import { CandidateItems } from './CandidateItems';

const styles = {
  localBoard: {
    color: localBoardColour
  }
};

export class LocalBoardScores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localBoardCandidates: [],
      isLoading: false
    };
  }

  async componentDidMount() {
    await this.getLocalBoardScores();
  }

  async componentDidUpdate({ localBoard }) {
    if (localBoard !== this.props.localBoard) {
      await this.getLocalBoardScores();
    }

    scrollToCandidate();
  }

  get localBoardQuery() {
    const encodedLocalBoard = encodeURIComponent(this.props.localBoard);
    const baseQuery = `sheet=localBoard&localBoard=${encodedLocalBoard}`;

    if (this.props.subdivision) {
      const encodedSubdivision = encodeURIComponent(this.props.subdivision);
      return `${baseQuery}&subdivision=${encodedSubdivision}`;
    }

    return baseQuery;
  }

  async getLocalBoardScores() {
    this.setState({ isLoading: true });
    const scores = await getScores(this.localBoardQuery);
    this.setState({
      localBoardCandidates: scores.localBoardScores,
      isLoading: false
    });
  }

  render() {
    let { localBoard, subdivision } = this.props;

    return (
      <div>
        <ScoreHeading>
          <div>
            SCORES FOR LOCAL BOARD
            <span style={styles.localBoard}> ({localBoard})</span>
          </div>
          {subdivision ? (
            <div>
              <span>SUBDIVISION</span>{' '}
              <span style={styles.localBoard}>({subdivision})</span>
            </div>
          ) : null}
          <CandidateItems
            isLoading={this.state.isLoading}
            type={candidateType.LOCAL_BOARD}
            colour={localBoardColour}
            candidates={this.state.localBoardCandidates}
          />
        </ScoreHeading>
      </div>
    );
  }
}

LocalBoardScores.propTypes = { localBoard: PropTypes.any };
