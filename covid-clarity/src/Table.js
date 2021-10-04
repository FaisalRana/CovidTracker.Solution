import React from 'react'
import { sortHelper } from './helper.js'
import numeral from 'numeral'

function Table({ countries, onCountryChange, allCountryInfo}) {
  return (
    <div>
      <div className="table">
        <thead>
          <tr>
            <th scope="col">Total Cases per country</th>
          </tr>
        </thead>
        <tbody>
        {countries.map(({ country, cases }) => (
            <tr>
              <td value={country}
                onClick={() => onCountryChange(country)}>{country}</td>
              <td><strong>Cases:</strong> {numeral(cases).format('0,0')}</td>
              <td></td>
            </tr>
        ))}
        </tbody>
      </div>
    </div>

  )
}

// export const reverseOrder = (data) => {
//   const dataToSort = [...data]

//   dataToSort.sort((a, b) => a.cases - b.cases)

//   return dataToSort;
// }


export default Table
