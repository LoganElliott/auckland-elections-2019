import AppBar from '@material-ui/core/AppBar/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import transport from '../Contants/transport';
import house from '../Contants/house';
import environment from '../Contants/environment';
import competence from '../Contants/competence';
import { SectionScores } from './SectionScores';
import { TotalScore } from './TotalScore';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import * as PropTypes from 'prop-types';

import './tabs.css';

const transportQuestions = [
  'Transport budget breakdown',
  'Lowering speed limits',
  'Top 3 Transport projects',
  'Achieving modal shift',
  'Support for tactical urbanism',
  'Stance on micromobility',
  'Public transport fares'
];

const localBoardTransportQuestions = [
  'Local Board Transport Capital Fund',
  'Lowering speed limits',
  'Support for tactical urbanism',
  'Safe Cycling Infrastructure',
  'Stance on micromobility'
];

const urbanFormQuestions = [
  'Housing supply and affordability',
  'Accelerating Kiwibuild',
  'Building construction and function'
];

const localBoardUrbanFormQuestions = [
  'Compact City Model and Unitary Plan',
  'Green Buildings'
];

const environmentQuestions = [
  'Open spaces and streetscapes',
  'Improving pedestrian environment',
  'Reducing consumption and waste',
  'Keeping to 1.5 and the climate emergency',
  'Just transition for mitigation and adaptation'
];

const localBoardEnvironmentQuestions = [
  'Open Spaces and streetscapes',
  'Keeping to 1.5 and the climate emergency',
  'Vision for Climate Zero Auckland'
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box style={{ padding: 0 }} p={4}>
        {children}
      </Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const a11yProps = index => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`
});

export const QuestionTabs = ({ candidate, isLocalBoard }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ width: '100%' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="score-categories"
          classes={{ flexContainer: 'spaceTabContent' }}
        >
          <Tab label="Transport" icon={transport} {...a11yProps(0)} />
          <Tab label="Urban Form" icon={house} {...a11yProps(1)} />
          <Tab label="Environment" icon={environment} {...a11yProps(2)} />
          {!isLocalBoard ? (
            <Tab label="Competency" icon={competence} {...a11yProps(3)} />
          ) : null}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <SectionScores
          questions={
            isLocalBoard ? localBoardTransportQuestions : transportQuestions
          }
          sectionNumber={1}
          sectionTitle={'Transport Score'}
          candidate={candidate}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SectionScores
          questions={
            isLocalBoard ? localBoardUrbanFormQuestions : urbanFormQuestions
          }
          sectionNumber={2}
          sectionTitle={'Urban Form Score'}
          candidate={candidate}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SectionScores
          questions={
            isLocalBoard ? localBoardEnvironmentQuestions : environmentQuestions
          }
          sectionNumber={3}
          sectionTitle={'Environment Score'}
          candidate={candidate}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TotalScore sectionTitle={'Competence'} score={candidate[`s4Score`]} />
      </TabPanel>
    </div>
  );
};
