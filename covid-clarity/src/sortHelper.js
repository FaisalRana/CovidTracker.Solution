export const sortHelper = (data) => {
  const dataToSort = [...data]

if (dataToSort[0].cases > dataToSort[1].cases) {
  dataToSort.sort((a, b) => a.cases - b.cases)
} else  dataToSort.sort((a, b) => b.cases - a.cases)

  return dataToSort;
}
