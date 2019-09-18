import React, { Fragment } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Question } from './Question';
import transport from '../Contants/transport';
import ATAP from './ATAP.png';
import Renewals from './Renewals.png';

export const Transport = () => (
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
      <div style={{ margin: '8px' }}>{transport}</div>
      <h1>Transport (40%)</h1>
    </div>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        id="panel1a-header"
      >
        Question 1
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div>
          <img
            src={ATAP}
            style={{ width: '100%', maxWidth: '800px' }}
            atl="ATAP report"
          />
          <a
            href="https://www.transport.govt.nz/assets/Uploads/Land/Documents/7bbf7cd0db/ATAP2018.pdf"
            aria-label="Image source"
            style={{ padding: '8px' }}
          >
            Source
          </a>
          <img
            src={Renewals}
            style={{ width: '100%', maxWidth: '800px' }}
            atl="Renewals"
          />
          <a
            href="https://www.transport.govt.nz/assets/Uploads/Land/Documents/26f5ef6cfa/ATAP-MOR-Report.pdf"
            aria-label="Image source"
            style={{ padding: '8px' }}
          >
            Source
          </a>

          <Question
            preamble="Here is a chart of ATAP’s planned expenditure (as of 2018) for
        transport funding under Auckland Council."
            question="What do you make of
        the budget breakdown in the Auckland Transport Alignment Project?"
            highScoringAnswers={[
              'Believes/recognises this is an improvement over historic spending',
              'Believes/recognises that Auckland needs a bigger increase in funding for public transport, active modes and safety programmes',
              'Believes/recognises that there is still too much spent on roads, especially large ticket roads (penlink, mill road, east west link etc)'
            ]}
            lowScoringAnswers={[
              'Approves of current budget',
              'Wants more spending on roads/less spending on everything else',
              'Mention of ‘meme’ future technology (self driving cars, drones, AI, monorail)',
              'Auckland Transport is acting against the interests of the people/constituents.'
            ]}
          />
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        id="panel1a-header"
      >
        Question 2
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Question
          preamble="The number of deaths on New Zealand (and Auckland) roads has been increasing the last few years. Auckland Transport aims to implement a Vision Zero policy. “Vision Zero” is a policy which pushes for having zero preventable deaths on our roads."
          question="As part of Vision Zero, Auckland Transport has proposed lowering speed limits on many rural roads and in town centres. Where do you stand on the proposed speed limit reductions?"
          highScoringAnswers={[
            'Prioritising safety over speed for roads',
            'Supports 30km/h in Town and City Centres, residential streets',
            'Supports 80km/h on rural roads',
            'Supports more median barriers'
          ]}
          lowScoringAnswers={[
            'Does not support or does not know what Vision Zero is',
            'Blames drivers for traffic collisions, not the roading system',
            'Concerned Vision Zero will worsen the economy',
            'Gives exclusions to the rule e.g. in city centre but not Nelson St.',
            'Claims there is no evidence for lower speed limits being effective for preventing deaths/injuries'
          ]}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        id="panel1a-header"
      >
        Question 3
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Question
          question="Can you name three transport projects (planned, proposed, or your own ideas) you believe will benefit Auckland the most?"
          highScoringAnswers={[
            'City Rail Link',
            'Light Rail',
            'Busways/bus lanes',
            'The cycleway network',
            'Expresses urgency for specific projects',
            'Extra points for mobility and low carbon options'
          ]}
          lowScoringAnswers={[
            'Mill Rd',
            'Penlink',
            'Autonomous cars',
            'Northcote motorway',
            'Harbour crossing (cars only)'
          ]}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        id="panel1a-header"
      >
        Question 4
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Question
          preamble="Auckland has historically spent the majority of transport funding on car infrastructure. Recently, Auckland Transport and the Ministry of Transport has committed to a modal shift to active transport and public transit (As seen in question 1). This would help NZ achieve its emissions reduction targets under the Paris Agreement."
          question="What specific policies, projects and actions would you undertake to facilitate and encourage this modal shift?"
          highScoringAnswers={[
            'Supports modal shift',
            "'We need to do more to fulfil our targets'",
            "'Current plans are too slow'",
            'Mentions bus lanes/bike lanes, reducing space available to cars and increasing space for other modes, making public transport more affordable'
          ]}
          lowScoringAnswers={[
            'Avoids being definitively against/for modal shift',
            'Against modal shift, need to focus on providing space for cars',
            'Happy to entertain other modes, but not willing/reluctant to sacrifice space currently used for cars',
            'Talks too much about electric cars and ignores other modes',
            'Claims that the public is not supportive of this modal shift, and that this is a decisive reason not to do it',
            'Overly focuses on education as being the main solution',
            'Too hard - weather, hills, etc.',
            'Disavows the Paris climate agreement'
          ]}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        id="panel1a-header"
      >
        Question 5
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Question
          preamble="Tactical urbanism is gaining popularity in making small and cheap, but meaningful improvements to our city."
          question="How can Auckland better utilise tactical urbanism practises to benefit the city?"
          highScoringAnswers={[
            'Demonstrates an understanding of tactical urbanism (how an urban environment can be improved--e.g. spots on Shortland Street, planter boxes protecting footpaths, etc.)',
            'Gives examples such as: painted cycleways, planters, temporarily closing streets etc.',
            'Supports tactical urbanism and has specific ideas for where it could be used',
            'Sees current progress as too slow, and is hopeful that tactical urbanism will speed it up',
            'Sees trialling changes as a good option for getting people used to road space reallocation (without reliance on inadequate consultation which is generally not representative)'
          ]}
          lowScoringAnswers={[
            'Does not display an understanding of what tactical urbanism is',
            'Sees no use for tactical urbanism in Auckland',
            'Disapproves of tactical urbanism interventions as they reduce space for cars',
            'Supports the use of tactical urbanism in the city centre but nowhere else',
            'Focuses exclusively on cost and not on the value of tactical urbanism'
          ]}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        id="panel1a-header"
      >
        Question 6
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Question
          preamble="Over the past two years we have seen an explosion of micro-mobility (i.e. bikes, e-scooters, share schemes etc) in Auckland."
          question="What is your stance on micro-mobility options? "
          highScoringAnswers={[
            'Supports micro-mobility and ride-share options',
            'Supports the provision of dedicated virtual parking places',
            'Highlights the need for more bike /micro-mobility lanes',
            'Supports increasing the catchment for public transport stations',
            'Wishes for micro-mobility options to be more wide-spread in suburbs',
            'Endorses separate safe spaces for micro-mobility options (e.g. bike lanes)',
            'Would hold companies accountable for the safety of their products'
          ]}
          lowScoringAnswers={[
            'Thinks that micro-mobility options should be banned; that there is no way for these modes of transport to be safe',
            'Believes micro-mobility options are ruining our city centres',
            'Overestimates the dangers of micro-mobility compared to motor vehicle use',
            'Overly focuses on helmet use'
          ]}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        id="panel1a-header"
      >
        Question 7
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Question
          preamble="Earlier this year we (Generation Zero) campaigned to ‘Freeze the Fares’. As a result, the council is introducing free fares for under 16s on weekends from September the 1st."
          question="Are you familiar with the Freeze the Fares campaign? Do you support free fares for under 16s on weekends being extended to all ages? Do you think we should introduce other fare structures like daily fare caps?"
          highScoringAnswers={[
            'Supports the Freeze the Fares campaign',
            'Support a fare structure which incentivises the use of public transport',
            'Has clear knowledge of what we proposed',
            'Gives examples of other things that can be done e.g. daily fare caps',
            'Suggests  measures which would reduce the cost of public transport to the user',
            'Highlights the fact that public transport is currently unaffordable for many Aucklanders'
          ]}
          lowScoringAnswers={[
            'Does not support free weekends',
            'Does not support public transport investment',
            'Sees public transport as a commodity rather than a public good',
            'Endorses a user pays model; believes public transport shouldn’t be subsidised',
            '‘No such thing as a free lunch’ for young people',
            'Talks about public transport as a luxury that young people do not need to have access to'
          ]}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </Fragment>
);
