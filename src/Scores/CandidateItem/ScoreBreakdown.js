import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import qs from 'qs';

import { CandidateInfo } from './BigCandidateItem';
import history from '../../history';

import { QuestionTabs } from './QuestionTabs';
import { addCandidateToQuery, removeCandidateFromQuery } from '../utilities';
import { candidateType } from '../constants';

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
    justifyContent: 'center',
    padding: '0 20px'
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

export const ScoreBreakdown = ({ candidate, colour, type }) => {
  const classes = useStyles();
  let openModal = false;
  const query = qs.parse(history.location.search);

  if (`${type}-${candidate.surname}` === query.candidate) {
    openModal = true;
  }

  const [open, setOpen] = React.useState(openModal);
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    addCandidateToQuery(type, candidate.surname);
    setOpen(true);
  };

  const handleClose = () => {
    removeCandidateFromQuery();
    setOpen(false);
  };

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
            {candidate.candidateSummary ? (
              <div
                style={{
                  ...styles.quoteWrapper,
                  backgroundColor: 'rgba(255,255,255,0.2)'
                }}
              >
                <div style={styles.quote}>{candidate.candidateSummary}</div>
                <div>MARKERS CONSENSUS</div>
              </div>
            ) : null}
          </div>
          <QuestionTabs
            candidate={candidate}
            isLocalBoard={type === candidateType.LOCAL_BOARD}
          />
        </div>
      </Modal>
    </div>
  );
};
