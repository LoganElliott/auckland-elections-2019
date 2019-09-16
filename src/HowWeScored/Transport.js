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
          <img src={ATAP} style={{ width: '100%', maxWidth: '800px' }} />
          <a
            href="https://www.transport.govt.nz/assets/Uploads/Land/Documents/7bbf7cd0db/ATAP2018.pdf"
            aria-label="Image source"
            style={{ padding: '8px' }}
          >
            Source
          </a>
          <img src={Renewals} style={{ width: '100%', maxWidth: '800px' }} />
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
            goodAnswers={[
              'This is an improvement over historic spending',
              'We need a bigger increase in PT and active modes',
              'Still too much spent on roads, especially large ticket roads (penlink, mill road, east west link etc)',
              'More on safety'
            ]}
            badAnswers={[
              'Looks fine',
              'More road spending required',
              'Less spending on everything except roads',
              'Meme future technology mention (self driving cars, drones, AI, monorail)',
              'Auckland Transport is acting against the interests of the people/constituents'
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
          goodAnswers={[
            'Prioritising safety over speed for roads',
            'Looking for support on 30km/h in Town and City Centres, residential streets',
            'Supports 80km/h on rural roads.',
            'Supports more medians barriers'
          ]}
          badAnswers={[
            'Does not support and does not know what vision zero is',
            'Blames driver, not roading system',
            'Concerned this will worsen the economy',
            'Gives exclusions to the rule e.g. in city centre but not Nelson St',
            'No evidence for lower speed limits being effective for preventing deaths/injuries'
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
          goodAnswers={[
            'CRL',
            'Light Rail',
            'Busways/bus lane',
            'The cycleway networks',
            'Points for mobility and low carbon options',
            'Expresses urgency for specific projects'
          ]}
          badAnswers={[
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
          goodAnswers={[
            'Supports modal shift',
            'Says we need to do more to fulfil our targets',
            'Current plans are too slow',
            'Mentions bus lanes/bike lanes, reducing space available to cars and increasing space for other modes, making public transport more affordable'
          ]}
          badAnswers={[
            'Avoids being definitively against/for modal shift',
            'Against modal shift, need to focus on providing space for cars',
            'Happy to entertain other modes, but not willing to sacrifice space for cars',
            'Reluctant to take the space away from cars',
            'Talks too much about electric cars and ignores other modes',
            'Public is not supportive of this modal shift',
            'Overly focuses on education as being the main solution',
            'Too hard - weather, hills, etc.',
            'Disavowing paris agreement'
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
          goodAnswers={[
            'Knows what tactical urbanism is (demonstrating how an urban environment can be improved--e.g. spots on Shortland Street, plastic planter boxes protecting footpaths, etc.)',
            'Gives examples: painted cycleways, planters, temporarily closing streets etc.',
            'Supports tactical urbanism and has specific ideas for where it could be used',
            'Current progress is too slow, and tactical urbanism will speed it up',
            'Sees trialling as a good option for getting people used to road space reallocation (without reliance on inadequate consultation which is generally not representative)'
          ]}
          badAnswers={[
            'They don’t know what tactical urbanism is',
            'Sees no use for it in Auckland',
            'Doesn’t like the idea as it reduces space for cars',
            'Supports in city centre but nowhere else',
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
          goodAnswers={[
            'Supports micro-mobility and ride-share',
            'Provisions - dedicated virtual parking places, ',
            'Highlight the need for more bike /micro-mobility lanes',
            'Increase catchment for public transport stations',
            'Should be more wide-spread in suburbs',
            'Safety - encourages separate safe spaces (e.g. bike lanes)',
            'Companies accountable for safety'
          ]}
          badAnswers={[
            'Should be banned, no way for these modes to be safe ',
            'Ruining our city centres',
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
          goodAnswers={[
            'Support the freeze the fares campaign',
            'Support a fare structure which incentivises PT',
            'Clear knowledge of what we proposed',
            'Gives examples of other things that can be done e.g. daily fare caps.',
            'Any answer that reduces cost of PT',
            'Highlights how PT is unaffordable and for other groups'
          ]}
          badAnswers={[
            'Do not support free weekends',
            'Does not support public transport investment',
            'Sees it as a commodity rather than public good',
            'User pays, shouldn’t be subsidised',
            '‘No such thing as a free lunch’ for young people',
            'Talks about young people not needing to have access to this as a luxury'
          ]}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </Fragment>
);
