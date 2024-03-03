import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import "./App.css";
import Statistics from "./components/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackTypes = [
    { name: "good", state: good, setState: setGood },
    { name: "neutral", state: neutral, setState: setNeutral },
    { name: "bad", state: bad, setState: setBad },
  ];

  const feedback = {
    feedbackHeading: "give feedback",
    feedbackSubHeading: "statistics",
  };

  return (
    <div>
      <Header heading={feedback.feedbackHeading} />
      <div style={{ display: "flex", gap: "1rem" }}>
        <Button handleClick={() => setGood(good + 1)} name="good" />
        <Button handleClick={() => setBad(bad + 1)} name="bad" />
        <Button handleClick={() => setNeutral(neutral + 1)} name="neutral" />
      </div>
      <Header heading={feedback.feedbackSubHeading} />
      {good + bad + neutral > 0 ? (
        <Statistics good={good} bad={bad} neutral={neutral} />
      ) : (
        <div>No feedback given</div>
      )}
    </div>
  );
};

export default App;
