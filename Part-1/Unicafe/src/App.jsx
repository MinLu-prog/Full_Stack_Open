import { useState } from 'react'
import { Header } from './Components/Header'
import { Button } from './Components/Button'
import { Statistics } from './Components/Stat'
function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGoodClick = () =>{
    const updatedGood = good+1;
    setGood(updatedGood)
  }
  const handleNeutralClick = () =>{
    const updatedNeutral = neutral  + 1;
    setNeutral(updatedNeutral)
  }
  const handleBadClick = () =>{
    const updatedBad = bad + 1;
    setBad(updatedBad)
  }
  return (
    <div>
      <Header/>
      <div>
        <Button onClick={handleGoodClick} text = "good" value={good} />
        <Button onClick={handleNeutralClick} text = "neutral"/>
        <Button onClick={handleBadClick} text = "bad"/>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>

 
  )
}

export default App
