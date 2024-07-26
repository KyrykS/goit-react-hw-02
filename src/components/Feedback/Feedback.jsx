import React from 'react';
function Feedback({ feedback }) {
  return (
    <div className="Feedback">
      <h2>Feedback Summary</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
    </div>
  );
}

export default Feedback;
