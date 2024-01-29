import './App.css'
import {puppyList} from './data.js'
import { useState } from 'react'

function App() {
      const [puppies, setPuppies] = useState(puppyList);
      const [featPup, setFeatPup] = useState(null);
      // console.log("puppyList", puppyList);
        
      function handleClick(id) {
        setFeatPup(id)
      }
      const featuredPup = puppies.find((pup)=> pup.id === featPup)
      console.log("featuredPup",featuredPup);

      return (
        <div className="App">
          {puppies.map((puppy) => {
            return (
              <p onClick={() => handleClick(puppy.id)} key={puppy.id}>
                {puppy.name}
              </p>
            );
          })}
          {featPup && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
        </div>
      );
    }

export default App
// export {puppyList}