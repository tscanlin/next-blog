export function formatDate(dateString) {
  const utcString = new Date(dateString).toUTCString()
  const splitDate = utcString.split(' ')
  const dateArr = splitDate.slice(1, 4)
  // Swap day and month.
  // dateArr.splice(1, 1, dateArr.splice(0, 1, dateArr[1])[0])
  return dateArr.join(' ')
}
