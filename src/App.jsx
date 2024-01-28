import './App.css'
import {puppyList} from './data.js'
import { useState } from 'react'

function App() {
      console.log(puppyList)
      const [puppies, setPuppies] = useState(puppyList)
      return(
      <div>
      </div>
      )
}

export default App
// export {puppyList}