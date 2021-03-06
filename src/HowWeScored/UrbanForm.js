import React, { Fragment } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Question } from './Question';
import house from '../Contants/house';

export const UrbanForm = () => (
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
      <div style={{ margin: '8px' }}>{house}</div>
      <h1>Urban Form (25%)</h1>
    </div>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        id="panel1a-header"
      >
        Question 8
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Question
          preamble="In the last few years we have seen improvements in the amount of affordable housing provided."
          question="What ideas do you have to improve housing supply and affordability in Auckland?"
          highScoringAnswers={[
            'Increasing density around urban centres and public transport nodes',
            'Transit oriented development',
            'Community-focused housing',
            'Supports enabling papakāinga (Māori housing model built around community and marae)',
            'Mentions known atomic family housing models',
            'Supports compact city model and the 70/40 development',
            'Demonstrates urgency that council needs to do more',
            'Talks about ensuring quality (while still being fully supportive of density)'
          ]}
          lowScoringAnswers={[
            'Endorses sprawl',
            'Wishes to remove the rural-urban boundary',
            'Provides a NIMBY response - “ok to densify city centre, but nowhere else”',
            'Wishes to reform the Resource Management Act in ways that Generation Zero does not endorse e.g. removing environmental protections'
          ]}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        id="panel1a-header"
      >
        Question 9
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Question
          preamble="The government has committed to building 50,000 homes in Auckland as part of the Kiwibuild programme."
          question="How can Auckland Council and Council-Controlled-Organisations enable/accelerate Kiwibuild within Auckland?"
          highScoringAnswers={[
            'Enable/encourage increasing density',
            'Rezoning to favour Kiwibuild developments',
            'Housing and Urban Development Authority',
            'Emphasises the need for local government and central government to work together and strong working relationship'
          ]}
          lowScoringAnswers={[
            'Dismisses the work of Kiwibuild',
            'Doesn’t think we need to build more houses/doesn’t recognise the housing situation in Auckland as a problem',
            'Talks about single dwelling and/or large houses as a desirable option for housing'
          ]}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        id="panel1a-header"
      >
        Question 10
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Question
          preamble="Building construction and function is a contributor to climate change. One way to reduce the impact is through green features such as limiting construction waste, reduced energy usage, and alternative energy sources."
          question="How can green features become more prevalent in both public and private buildings?  If not supportive of green features, what other ways do you suggest to reducing the impact of buildings on climate change?"
          highScoringAnswers={[
            'Have all public buildings require green features',
            'Green star put in the Unitary Plan/Building Code',
            'Change legislation to make it include all private buildings',
            'Developer benefits (contributions, consenting costs) if they include in their buildings',
            'Mentions green building certification programme'
          ]}
          lowScoringAnswers={[
            'Green features in construction are not needed or too costly',
            'Believes more research/information is needed to determine whether green features are the best way for rate-payers money to be spent',
            'Wishes to leave this to the construction industry or to central government'
          ]}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </Fragment>
);
