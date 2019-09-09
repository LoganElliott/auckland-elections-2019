import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import * as PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CandidateInfo } from './CandiateItem';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { SectionScores } from './SectionScores';
import { TotalScore } from './TotalScore';

const transportQuestions = [
  'Auckland Transport spending',
  'Vision Zero',
  'Top 3 transport projects',
  'Modal shift to active transport',
  'Tactical Urbanism',
  'Micro mobility support',
  'Freeze the fairs'
];

const urbanFormQuestions = [
  'Increasing housing supply and affordability',
  'Making kiwibuild better in Auckland',
  'More environmental building construction'
];

const environmentQuestions = [
  "Improving Auckland's streetscapes",
  'Improving pedestrian environment and accessibility',
  'Reducing waste',
  'Addressing climate change',
  'Just transition for climate change'
];

const styles = {
  button: {
    height: '62px',
    width: '254px'
  },
  leftSide: {
    width: '500px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 1100,
    height: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5]
  }
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    display: 'flex'
  };
}

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
      <Box p={4}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export const ScoreBreakdown = ({ candidate, colour }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);
  const [value, setValue] = React.useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div>
      <Button variant="contained" style={styles.button} onClick={handleOpen}>
        SCORE BREAKDOWN
      </Button>
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          <div style={{ ...styles.leftSide, backgroundColor: colour }}>
            <CandidateInfo candidate={candidate} />
          </div>
          <div>
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <Tab label="Transport" {...a11yProps(0)} />
                <Tab label="Urban Form" {...a11yProps(1)} />
                <Tab label="Environment" {...a11yProps(2)} />
                <Tab label="Competency" {...a11yProps(3)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <SectionScores
                questions={transportQuestions}
                sectionNumber={1}
                sectionTitle={'Transport Score'}
                candidate={candidate}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <SectionScores
                questions={urbanFormQuestions}
                sectionNumber={2}
                sectionTitle={'Urban Form Score'}
                candidate={candidate}
              />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <SectionScores
                questions={environmentQuestions}
                sectionNumber={3}
                sectionTitle={'Environment Score'}
                candidate={candidate}
              />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <TotalScore
                sectionTitle={'Competence'}
                score={candidate[`s4Score`]}
              />
            </TabPanel>
          </div>
        </div>
      </Modal>
    </div>
  );
};
