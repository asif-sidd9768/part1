import { Fragment, useState } from "react";

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({text, value, positive}) => {
  if(positive){
    return (
      <tr>
        <td>{text}</td>
        <td>{value * 100} %</td>
      </tr>
    )
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, averageScore}) => {

  const totalFeedback = good+bad+neutral
  const average = averageScore/totalFeedback
  const positive = good/totalFeedback

  if(totalFeedback < 1){
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
    <h1>statistics</h1>
    <table>
      <tbody>
        <StatisticLine text="good" value={good} positive={false} />
        <StatisticLine text="neutral" value={neutral} positive={false} />
        <StatisticLine text="bad" value={bad} positive={false} />
        <StatisticLine text="all" value={totalFeedback} positive={false} />
        <StatisticLine text="average" value={average} positive={false} />
        <StatisticLine text="positive" value={positive} positive={true} />
      </tbody>
    </table>
  </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [averageScore, setAverageScore] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAverageScore(averageScore+1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAverageScore(averageScore+0)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAverageScore(averageScore-1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      
      <Statistics good={good} neutral={neutral} bad={bad} averageScore={averageScore}  />
    </div>
  )
}

export default App;