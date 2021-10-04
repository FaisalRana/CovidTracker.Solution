export const sortHelper = (data, caseType) => {
  const dataToSort = [...data]
// switch (caseType) {
//   case "casesAscending":
//     console.log("sort by ascnding cases")
//   case "casesDescending":
//     console.log("sort by descending cases")
// }
// console.log(caseType)
if (caseType === "casesAscending") {
  dataToSort.sort((a, b) => b.cases - a.cases)
} else if(caseType ==="casesDescending") dataToSort.sort((a, b) => a.cases - b.cases)
else if(caseType ==="alphabeticalAscending") {
  dataToSort.sort((a, b) => b.country.localeCompare(a.country))
} else if(caseType === "alphabeticalDescending") {
  dataToSort.sort((a, b) => a.country.localeCompare(b.country))

}

  return dataToSort;
}
