import React from 'react';
import { useState } from 'react';
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  return (
    <div className="App">
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options feedback={feedback} setFeedback={setFeedback} />
      <Feedback feedback={feedback} />
    </div>
  );
}

export default App;


