import { useState } from "react"
import net from './service'

function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  const handleFilter = (event) => {
    const value = event.target.value
    setFilter(value)

    net.getCountries(value).then(response => {
      setCountries(response)
    }).catch ((error) => {
      console.log(error);
    })
    console.log(countries.map(country =>{country.name.common})
    );
  }

  return (
    <div>
      <form>
        <p>Find countries</p> 
        <input
          type='text'
          value={filter}
          onChange={handleFilter}
        />
      </form>


    </div>
  )
}

export default App
