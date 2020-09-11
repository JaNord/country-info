import React, {useState, useEffect} from "react"

import axios from "axios"

import Filter from "./Filter"
import CountryList from "./CountryList"

const CountryInfo = () => {

  const apiURL = "https://restcountries.eu/rest/v2/all"
  const [filter, setFilter] = useState("")
  const [countries, setCountries] = useState([])


  useEffect(() => {
    axios
    .get(apiURL)
    .then((response) => {
      setCountries(response.data);
    })
  },[])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const countriesToShow = () => (
    countries.filter(country => {
      return country.name.match(new RegExp(filter, "i"))
    })
  )

  return (
    <>
      <div>
        search for a country: <Filter value={ filter } handleChange={ handleFilterChange }/>
      </div>
      <div>
        <CountryList countries={ countriesToShow() } />
      </div>
    </>
  )
}
export default CountryInfo