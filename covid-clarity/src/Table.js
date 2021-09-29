import React from 'react'
import sortHelper from './sortHelper'

function Table({countries}) {
  return (
    <div>
    <div className="table">
      {countries.map(({country, cases}) => (
      <tr>
        <td>{country}</td>
        <td><strong>Cases:</strong> {cases}</td>
      </tr>

      ))}


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
