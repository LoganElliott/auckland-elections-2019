import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import * as PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import qs from 'qs';

import { CandidateInfo } from './CandiateItem';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { SectionScores } from './SectionScores';
import { TotalScore } from './TotalScore';
import history from '../history';

import transport from '../Contants/transport.js';
import house from '../Contants/house.js';
import environment from '../Contants/environment.js';
import competence from '../Contants/competence.js';

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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  quoteWrapper: {
    width: '400px',
    color: 'white'
  },
  quote: {
    margin: '16px'
  },
  scoreSection: {
    display: 'flex',
    alignItems: 'center',
    margin: '16px 0',
    width: '400px'
  },
  scoreTitle: {
    color: 'white',
    fontSize: '24px'
  },
  scoreWrapper: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    border: '5px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 20px',
    backgroundColor: 'white'
  },
  score: {
    fontWeight: 'bold',
    fontSize: '40px'
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
  let openModal = false;
  const query = qs.parse(history.location.search);

  if (
    history.location.search.includes('&candidate=') &&
    candidate.surname === query.candidate
  ) {
    openModal = true;
  }
  const [open, setOpen] = React.useState(openModal);
  const [modalStyle] = React.useState(getModalStyle);
  const [value, setValue] = React.useState(0);

  const updateQuery = () => {
    console.log(history.location);
    const search = `${history.location.search}&candidate=${candidate.surname}`;
    history.push(history.location.pathname + search);
  };

  const removeCandidateFromQuery = () => {
    const search = history.location.search.substring(
      0,
      history.location.search.indexOf('&candidate')
    );

    history.push(history.location.pathname + search);
  };

  const handleOpen = () => {
    updateQuery();
    setOpen(true);
  };

  const handleClose = () => {
    removeCandidateFromQuery();
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
            <div style={styles.scoreSection}>
              <div style={styles.scoreTitle}>Overall score</div>
              <div style={styles.scoreWrapper}>
                <div style={styles.score}>{candidate.overallGrade}</div>
              </div>
            </div>
            <div
              style={{
                ...styles.quoteWrapper,
                backgroundColor: 'rgba(255,255,255,0.2)'
              }}
            >
              <div style={styles.quote}>{candidate.standoutQuote}</div>
              <div>STANDOUT QUOTE</div>
            </div>
          </div>
          <div>
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <Tab label="Transport" icon={transport} {...a11yProps(0)} />
                <Tab label="Urban Form" icon={house} {...a11yProps(1)} />
                <Tab label="Environment" icon={environment} {...a11yProps(2)} />
                <Tab label="Competency" icon={competence} {...a11yProps(3)} />
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
