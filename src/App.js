import React, { useEffect } from 'react'

function App() {

  useEffect ( 
              ()=>{
                fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then( resp => resp.json())
                .then( data => console.log(data))
              }, 
              [] )

  return (
    <div>
      Hello Fetch
    </div>
  )
}

export default App

