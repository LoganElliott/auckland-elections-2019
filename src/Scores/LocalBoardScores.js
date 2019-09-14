import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { ScoreHeading } from './ScoreHeading';
import * as PropTypes from 'prop-types';
import { getScores } from './getScores';
import { CandidateItem } from './CandiateItem';
import { localBoardColour } from './constants';

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
          SCORES FOR LOCAL BOARD <div>({localBoard})</div>
          {subdivision ? <div>({subdivision})</div> : null}
          {!this.state.isLoading ? (
            this.state.localBoardCandidates.map(candidate => (
              <CandidateItem
                candidate={candidate}
                key={candidate.firstName + candidate.surname}
                colour={localBoardColour}
                isLocalBoard
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

LocalBoardScores.propTypes = { localBoard: PropTypes.any };
