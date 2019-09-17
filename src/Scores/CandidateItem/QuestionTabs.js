import AppBar from '@material-ui/core/AppBar/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import transport from '../../Contants/transport';
import house from '../../Contants/house';
import environment from '../../Contants/environment';
import competence from '../../Contants/competence';
import { SectionScores } from './SectionScores';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import * as PropTypes from 'prop-types';

import './tabs.css';
import {
  environmentQuestions,
  localBoardEnvironmentQuestions,
  localBoardTransportQuestions,
  localBoardUrbanFormQuestions,
  transportQuestions,
  urbanFormQuestions
} from '../../Contants/questions';
import { TotalScore } from './TotalScore';

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
          variant="fullWidth"
        >
          <Tab
            classes={{ labelIcon: 'tabLabel' }}
            label="Transport"
            icon={transport}
            {...a11yProps(0)}
          />
          <Tab
            classes={{ labelIcon: 'tabLabel' }}
            label="Urban Form"
            icon={house}
            {...a11yProps(1)}
          />
          <Tab
            classes={{ labelIcon: 'tabLabel' }}
            label="Environment"
            icon={environment}
            {...a11yProps(2)}
          />
          {!isLocalBoard ? (
            <Tab
              classes={{ labelIcon: 'tabLabel' }}
              label="Competency"
              icon={competence}
              {...a11yProps(3)}
            />
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
          isLocalBoard={isLocalBoard}
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
          isLocalBoard={isLocalBoard}
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
          isLocalBoard={isLocalBoard}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TotalScore sectionTitle={'Competence'} score={candidate[`s4Score`]} />
      </TabPanel>
    </div>
  );
};
