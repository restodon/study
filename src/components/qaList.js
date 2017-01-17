import React from 'react';
import QA from './qa';

const QAList = ({ cards }) => (
  <ul>
    {cards.map(question =>
      <QA
        key={question.id}
        {...question}
      />
    )}
  </ul>
)

export default QAList