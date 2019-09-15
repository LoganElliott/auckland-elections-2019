import React from 'react';
import { QuestionScore } from './QuestionScore';
import { TotalScore } from './TotalScore';

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
  isLocalBoard
}) => (
  <div style={styles.scores}>
    <TotalScore
      sectionTitle={sectionTitle}
      score={candidate[`s${sectionNumber}Score`]}
    />
    {questions.map((question, index) => (
      <QuestionScore
        key={index + 1}
        question={question}
        score={candidate[`q${index + 1}`]}
        isLocalBoard={isLocalBoard}
      />
    ))}
  </div>
);
