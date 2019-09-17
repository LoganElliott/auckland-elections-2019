import React, { Fragment } from 'react';
import { CircularProgress } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { CandidateItem } from './CandidateItem/CandiateItem';
import qs from 'qs';
import history from '../history';

export const CandidateItems = ({ isLoading, candidates, colour, type }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  if (isLoading) {
    return <CircularProgress size={200} />;
  }
  const firstFourCandidates = candidates.slice(0, 4);

  const remainingCandidates = candidates.slice(4);

  const firstFourCandidatesRender = firstFourCandidates.map(candidate => (
    <CandidateItem
      candidate={candidate}
      key={candidate.firstName + candidate.surname}
      colour={colour}
      type={type}
    />
  ));

  const query = qs.parse(history.location.search);

  if (
    remainingCandidates.some(
      candidate => `${type}-${candidate.surname}` === query.candidate
    )
  ) {
    setIsExpanded(true);
  }

  if (remainingCandidates.length === 0) {
    return firstFourCandidatesRender;
  }

  return (
    <Fragment>
      {firstFourCandidatesRender}
      <ExpansionPanel
        expanded={isExpanded}
        onChange={(event, expanded) => setIsExpanded(expanded)}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          id="panel1a-header"
        >
          See more candidates
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(229, 229, 229)'
            }}
          >
            {remainingCandidates.map(candidate => (
              <CandidateItem
                candidate={candidate}
                key={candidate.firstName + candidate.surname}
                colour={colour}
                type={type}
              />
            ))}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Fragment>
  );
};
