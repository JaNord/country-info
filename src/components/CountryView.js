import React from "react"

const CountryView = ({ country }) => {
    return (
        <>
        <h2>{ country.name }</h2>

        <img
            src={ country.flag }
            alt="flag"
            height="150"
            width="200">
        </img>
        
        <p>capital: { country.capital }</p>
        <p>population: { country.population }</p>
        <h3>Languages:</h3>
        <ul title="languages">
            { country.languages.map(language => (
                <li key={ language.name }>{ language.name }</li>
            )) }
        </ul>
        </>
    )
}
export default CountryView