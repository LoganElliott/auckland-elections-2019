import React, { Fragment } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Question } from './Question';
import competence from '../Contants/competence';

export const Competency = () => (
  <Fragment>
    <div
      style={{
        padding: '8px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div style={{ margin: '8px' }}>{competence}</div>
      <h1>Competency (10%)</h1>
    </div>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        id="panel1a-header"
      >
        General Competency
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Question
          preamble="This isn't a question we ask candidates directly but judge based on the interview as well as what we know from outside of it."
          question="How capable is this person as an advocate for our issues?"
          answers={[
            'Champion for our ideas',
            'Trust',
            'Experience',
            'Profile',
            'Judgement',
            'Honesty/integrity - do they stick to their word',
            'New perspective',
            'Is the candidate racist, homophobic, sexist, ableist, abusive or insulting',
            'Does the candidate deny climate change',
            'Engagement with stakeholder and residents groups'
          ]}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </Fragment>
);
