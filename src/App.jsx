import './App.css'
import {puppyList} from './data.js'
import { useState } from 'react'

function App() {
      console.log("puppyList", puppyList);
      const [puppies, setPuppies] = useState(puppyList);
      const [featPupId, setFeatPupId] = useState(null);

      function handleClick(){

      }
      return (
            <div className="App">
              {puppies.map((puppy) => {
                     return (
                     <p onClick={handleClick} key={puppy.id}>
                        {puppy.name}
                        </p>;
                     );
                   })
               }
            </div>
          );
        }

export default App
// export {puppyList}