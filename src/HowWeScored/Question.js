import React, { Fragment } from 'react';

export const Question = ({
  preamble,
  question,
  highScoringAnswers,
  lowScoringAnswers,
  answers
}) => (
  <div style={{ padding: '0 12px' }}>
    {preamble ? (
      <Fragment>
        <h2>Preamble</h2>
        <h3>{preamble}</h3>
      </Fragment>
    ) : null}
    <h2>Question</h2>
    <h3>{question}</h3>
    {highScoringAnswers ? (
      <Fragment>
        <h4>High Scoring Answers</h4>
        <ul>
          {highScoringAnswers.map((answer, index) => (
            <li key={index}>{answer}</li>
          ))}
        </ul>
      </Fragment>
    ) : null}
    {lowScoringAnswers ? (
      <Fragment>
        <h4>Low Scoring Answers</h4>
        <ul>
          {lowScoringAnswers.map((answer, index) => (
            <li key={index}>{answer}</li>
          ))}
        </ul>
      </Fragment>
    ) : null}
    {answers ? (
      <Fragment>
        <h4>Some of the things we take into account</h4>
        <ul>
          {answers.map((answer, index) => (
            <li key={index}>{answer}</li>
          ))}
        </ul>
      </Fragment>
    ) : null}
  </div>
);
