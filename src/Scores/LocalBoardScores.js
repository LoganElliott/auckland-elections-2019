import React, { Component } from 'react';
import { ScoreHeading } from './ScoreHeading';
import * as PropTypes from 'prop-types';
import { getScores } from './getScores';
import { CandidateItem } from './CandiateItem';
import { localBoardColour } from './constants';

export class LocalBoardScores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localBoardCandidates: []
    };
  }

  async componentDidMount() {
    await this.getLocalBoardScores();
  }

  async getLocalBoardScores() {
    const encodedLocalBoard = encodeURIComponent(this.props.localBoard);
    const scores = await getScores(
      `sheet=localBoard&ward=${encodedLocalBoard}`
    );
    this.setState({ localBoardCandidates: scores.localBoardScores });
  }

  render() {
    let { localBoard } = this.props;
    return (
      <div>
        <ScoreHeading>
          SCORES FOR <span>LOCAL BOARD</span> (
          {localBoard})
          {this.state.localBoardCandidates.map(candidate => (
            <CandidateItem
              candidate={candidate}
              key={candidate.firstName + candidate.surname}
              colour={localBoardColour}
              isLocalBoard
            />
          ))}
        </ScoreHeading>
      </div>
    );
  }
}

LocalBoardScores.propTypes = { localBoard: PropTypes.any };
