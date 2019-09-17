import React, { Fragment } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Question } from './Question';
import environment from '../Contants/environment';

export const Environment = () => (
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
      <div style={{ margin: '8px' }}>{environment}</div>
      <h1>Environment (25%)</h1>
    </div>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        id="panel1a-header"
      >
        Question 11
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Question
          question="Do you believe that Auckland’s streetscapes and open spaces are serving the needs of Aucklanders to the fullest? What do you think can be done to improve their value and function?"
          highScoringAnswers={[
            'More accessible for pedestrians',
            'More daylighting of streams - riparian management, greenways',
            'More forest/trees, less grass/field - greater biodiversity and carbon sink',
            'Street trees',
            'Council run events (or any events) in public spaces'
          ]}
          lowScoringAnswers={[
            '“Streets are for cars”',
            'Wider car lanes',
            'Thinks that Auckland open spaces are already functioning at their full capacity',
            'More parking at parks',
            'Privatisation of parks'
          ]}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        id="panel1a-header"
      >
        Question 12
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Question
          preamble="There is growing pressure for improving the city centre pedestrian environment and accessibility by restricting through-routing of vehicular traffic. This includes fully pedestrianising some streets such as Queen Street and High Street."
          question="How well does this align with your vision for the City Centre? Do you see improving the pedestrian environment and accessibility as something that we should be extending to other centres in Auckland?"
          highScoringAnswers={[
            'Prioritises the suitability of the environment for pedestrians over access for cars',
            'Wants to see the pedestrianisation of streets implemented in other centres',
            'Mentions tactical urbanism',
            'Provides examples of places that these changes can be extended to'
          ]}
          lowScoringAnswers={[
            'Wishes for more concrete and cars',
            'Doesn’t support pedestrianisation',
            'Concerns over taking away parking',
            'Works well in other places (e.g. Melbourne) but can’t work here'
          ]}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        id="panel1a-header"
      >
        Question 13
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Question
          preamble="Auckland Council has so far been fairly good at recycling and is working on a city-wide composting scheme. Despite this, there is still a significant problem with waste from over-consumption in Auckland."
          question="To address this, how can Auckland Council help households and businesses reduce consumption and overall waste production?"
          highScoringAnswers={[
            'Promotes product stewardship (producers taking responsibility for the lifecycle of their products)',
            'Promotes reduction in construction waste',
            'Better regulation around food packaging',
            'Roll out compost'
          ]}
          lowScoringAnswers={[
            'Thinks recycling is enough',
            'Cannot think of any initiatives',
            'Sees reduceing waste production as solely the consumer’s responsibility, with council having little/no role',
            'Conversely, expresses that there is little/no feasible way for people to be responsible for their waste'
          ]}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        id="panel1a-header"
      >
        Question 14
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Question
          preamble="Auckland Council has recently declared a state of climate emergency."
          question="What local efforts must be prioritised under this declared climate emergency to help Auckland avoid contributing to a global average temperature rise above 1.5°C degrees? What specific projects would you want to prioritise to address the climate emergency and keep within 1.5?"
          highScoringAnswers={[
            'Prioritises public transport first and foremost.',
            'Understands the need for both prevention (measures to overall reduce CO2 emission to zero) and mitigation',
            'Action needs to come from all areas under council control (CCOs, local boards, etc)'
          ]}
          lowScoringAnswers={[
            'Believes we don’t need to change anything: that climate change is not an emergency',
            'Believes technology will save the planet and us',
            'Repeats poor responses from other questions ',
            'Invokes the need for more research/information in order to act',
            'Focuses on individual responsibility rather than councils responsibility',
            'Claims that Auckland has a small role in avoiding an excess of 1.5 degrees; expresses that this is more of a global issue as an excuse for inaction',
            'Claims people are not ready for change/that Council should not force people to change'
          ]}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        id="panel1a-header"
      >
        Question 15
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Question
          preamble="Our most marginalised communities in Auckland such as Māori, Pasifika, and low-income groups are disproportionately affected by the adverse consequences of climate change."
          question="What is your vision for ensuring a just transition for adaptation and mitigation regarding climate change?"
          highScoringAnswers={[
            'Clear understanding of a just transition: ensuring actions for mitigating and adapting to climate change are equitable.',
            'Suggestions for mitigation - actions - e.g. ambitious climate/carbon emission targets, carbon taxes, levies, investment for green infrastructure',
            'Sees importance of both mitigation and adaptation',
            'Bonus points for knowing Local Territorial Authorities under the Resource Management Act are meant to adapt not mitigate'
          ]}
          lowScoringAnswers={[
            'Laissez-faire attitude',
            'Doesn’t understand need for just transition',
            'Talks about just transition in terms of the rich not being “unfairly disadvantaged”',
            'Advocates business-as-usual',
            'Only addresses adaptation not mitigation (or opposite)'
          ]}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </Fragment>
);
