import React, { useState } from 'react'
import './App.css'

import Person from './Person/Person'

const App = (props) => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'aaa', age: 123 },
      { name: 'bbb', age: 456 },
      { name: 'ccc', age: 789 }
    ],
  })

  useState({ otherState: 'aaaaa' })
  
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Danilo', age: 33 },
        { name: 'bbb', age: 456 },
        { name: 'ccc', age: 789 }
      ],
    })
  }

  return (
    <div className="App">
      <button onClick={switchNameHandler}>
        Mudar nome
      </button> 

      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}></Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}></Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}></Person>
    </div>
  )  
}

export default App;