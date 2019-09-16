import React, { Fragment } from 'react';

export const Question = ({
  preamble,
  question,
  goodAnswers,
  badAnswers,
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
    {goodAnswers ? (
      <Fragment>
        <h4>Good Answers</h4>
        <ul>
          {goodAnswers.map((answer, index) => (
            <li key={index}>{answer}</li>
          ))}
        </ul>
      </Fragment>
    ) : null}
    {badAnswers ? (
      <Fragment>
        <h4>Bad Answers</h4>
        <ul>
          {badAnswers.map((answer, index) => (
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
