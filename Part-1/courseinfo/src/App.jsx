import Button from "./components/button.Jsx"
import { Content } from "./components/Content"
import { Header } from "./components/Header"
import { History } from "./components/history"
import { Total } from "./components/Total"
import { useState } from "react"
const App = () => {
  //  const course = {
  //   name: 'Half Stack application development',
  //   parts: [
  //     {
  //       name: 'Fundamentals of React',
  //       exercises: 10
  //     },
  //     {
  //       name: 'Using props to pass data',
  //       exercises: 7
  //     },
  //     {
  //       name: 'State of a component',
  //       exercises: 14
  //     }
  //   ]
  // }
  // const parts1 = course.parts;
  // const name = course.name;
  // return (
  //   <div>
  //     <Header course = {name} />
  //     <Content part1={parts1[0].name} exercises1={parts1[0].exercises} part2={parts1[1].name} exercises2={parts1[1].exercises} part3={parts1[2].name} exercises3={parts1[2].exercises} />
  //     <Total exercises1={parts1[0].exercises} exercises2={parts1[1].exercises} exercises3={parts1[2].exercises} />
  //   </div>
  // )
  
  // const [ counter, setCounter ] = useState(0)
  // const increaseByone = () => setCounter(counter + 1 );
  // const setZero = () => setCounter(0);
  // const decreaseByone = () => setCounter(counter - 1 );
  // return (
  //   <div>
  //     <div>{counter}</div>

  //     <Button onClick = {increaseByone} text = "plus" />
  //     <Button onClick = {decreaseByone} text = "minus" />
  //     <Button onClick = {setZero} text = "zero" />
  //   </div>
  // ) const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  // eslint-disable-next-line no-debugger
//for the onClick function if the value of the ref props is string it will show error 
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
  const [left, setLeft] = useState(0)
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    let updatedLeft = left + 1;
    setLeft(updatedLeft)
    setTotal(left + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
    let updatedRight = right + 1;
    setRight(updatedRight)
    setTotal(left + right)
  }
  //Event Handler function
  const setToValue = (value) => () => {
        console.log(setTotal);
        setTotal(value);
      }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
      <p>total {total}</p>
      <History allClicks = {allClicks} />
      <button onClick={setToValue(9)}> Hi</button>
    </div>
  )
}

export default App