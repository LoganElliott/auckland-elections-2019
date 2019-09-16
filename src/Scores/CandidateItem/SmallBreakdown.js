import React, { Fragment } from 'react';
import qs from 'qs';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';

import history from '../../history';
import { QuestionTabs } from './QuestionTabs';

import './SmallBreakDown.css';
import { addCandidateToQuery, removeCandidateFromQuery } from '../utilities';
import { candidateType } from '../constants';

const styles = {
  quoteWrapper: {
    color: 'white',
    fontSize: '20x'
  },
  quote: {
    margin: '16px'
  }
};

export const SmallBreakdown = ({ candidate, type, colour }) => {
  const query = qs.parse(history.location.search);
  let expandedPanel = false;

  if (`${type}-${candidate.surname}` === query.candidate) {
    expandedPanel = true;
  }
  const [isExpanded, setIsExpanded] = React.useState(expandedPanel);

  return (
    <Fragment>
      {candidate.candidateSummary && isExpanded ? (
        <div style={{ backgroundColor: colour, width: '100%' }}>
          <div
            style={{
              ...styles.quoteWrapper,
              backgroundColor: 'rgba(255,255,255,0.2)',
              margin: '15px'
            }}
          >
            <div style={styles.quote}>{candidate.candidateSummary}</div>
            <div>MARKERS' CONSENSUS</div>
          </div>
        </div>
      ) : null}
      <ExpansionPanel
        style={{ flex: 1, marginTop: 0, maxWidth: '100%' }}
        expanded={isExpanded}
        onChange={(event, expanded) => {
          if (expanded) {
            addCandidateToQuery(type, candidate.surname);
          } else {
            removeCandidateFromQuery();
          }
          setIsExpanded(expanded);
        }}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          id="panel1a-header"
        >
          SCORE BREAKDOWN
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <QuestionTabs
            candidate={candidate}
            isLocalBoard={type === candidateType.LOCAL_BOARD}
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Fragment>
  );
};
