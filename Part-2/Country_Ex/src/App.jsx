import { useEffect, useState } from "react"
import net from './service'

function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() =>{
    net.getCountries(response => 
      setCountries(response)
    )
  },[])
  const matchcountries = countries.filter((c) => c.name.common.toLowerCase().includes(filter.toLowerCase()))

  console.log(countries);
  const handleFilter = (event) => {
    const value = event.target.value
    setFilter(value)
  }

  return (
    <div>
      <form>45
        <p>Find countries</p> 
        <input
          type='text'
          value={filter}
          onChange={handleFilter}
        />
        {
          
        }
      </form>


    </div>
  )
}

export default App
