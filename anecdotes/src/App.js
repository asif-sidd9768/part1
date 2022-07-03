import { useState } from "react"

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const MostVotedAnecdote = ({anecdotes, votes, maxKey}) => {
  if(votes[maxKey] < 1){
    return (
      <div>
        <h1>Anecdote with most votes</h1>
        <p>Anecdote yet to be voted.</p>
      </div>
    )
  }
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[maxKey]}</p>
      <p>has {votes[maxKey]} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({
    0:0,
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0,
  })

  const maxKey = Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b);

  const getNextAnecdote = () => {
    const setAnecdote = Math.floor(Math.random()*7)
    setSelected(setAnecdote)
    console.log("NEXTANECDOTE - SELECTED: ", selected);
    console.log("NEXTANECDOTE - VOTES: ", votes)
  }

  const voteHandler = () => {
    const newVotes = {...votes}
    newVotes[selected] += 1
    setVotes(newVotes)
    console.log("VOTEHANDLER - SELECTED: ", selected);
    console.log("VOTEHANDLER - VOTES: ", votes)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        {anecdotes[selected]}
      </p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={voteHandler} text="vote" />
      <Button handleClick={getNextAnecdote} text="next anecdote" />
      <MostVotedAnecdote anecdotes={anecdotes} votes={votes} maxKey={maxKey} />

    </div>
  )
}

export default App