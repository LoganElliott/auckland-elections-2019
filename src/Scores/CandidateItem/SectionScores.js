import React from 'react';
import { QuestionScore } from './QuestionScore';
import { TotalScore } from './TotalScore';

import './SectionScores.css';

const styles = {
  scores: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
  }
};

export const SectionScores = ({
  sectionNumber,
  sectionTitle,
  questions,
  candidate,
  isLocalBoard,
  indexStart
}) => (
  <div style={styles.scores} className="sectionScores">
    <TotalScore
      sectionTitle={sectionTitle}
      score={candidate[`s${sectionNumber}Score`]}
    />
    {questions.map((question, index) => (
      <QuestionScore
        key={index}
        question={question}
        score={candidate[`q${index + indexStart}`]}
        isLocalBoard={isLocalBoard}
      />
    ))}
  </div>
);
