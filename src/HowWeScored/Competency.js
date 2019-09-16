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
      <h1>Competency (15%)</h1>
    </div>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        Question 15
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Question
          preamble="Our most marginalised communities in Auckland such as Maori, Pasifika, and low-income groups are disproportionately affected by the adverse consequences of climate change."
          question="What is your vision for ensuring a just transition for adaptation and mitigation regarding climate change?"
          goodAnswers={[
            'Clear understanding of just transition: ensuring actions to mitigating and adapting to climate change are equitable. ',
            'Suggestions for mitigation - actions - e.g. ambitious climate/carbon emission targets, carbon taxes, levies, investment for green infrastructure',
            'Sees importance of both mitigation and adaptation.',
            'Bonus points for knowing Local Territorial Authorities under the Resource Management Act are meant to adapt not mitigate.'
          ]}
          badAnswers={[
            'Laissez-faire attitude',
            'Doesn’t understand need for just transition.',
            'Talks about just transition in terms of the rich not being “unfairly disadvantaged”',
            'Stick to the status quo',
            'Only addresses adaptation not mitigation (or opposite)'
          ]}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
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
