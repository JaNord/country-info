import React from "react"

import CountryView from "./CountryView"

const CountryList = ({ countries, handleClick }) => {

  if (countries.length > 10) {
    return <p>Too many matches for your search term.</p>
  }

  if (countries.length === 1) {
    return (
      <CountryView country={ countries[0] } />
    )
  }

  return countries.map(country => {
    return (
      <div key={ country.alpha2Code }>

        <span> { country.name }</span>

        <button
          onClick={ ()=> handleClick(country.name) }>
          view
        </button>

      </div>
    )
  })
}

export default CountryList