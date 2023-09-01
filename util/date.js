export function getFormattedDate(date) {
  // The toISOString() method returns a date object as a string, using the ISO standard.
  // The standard is called ISO-8601 and the format is: YYYY-MM-DDTHH:mm:ss.sssZ
  return date.toISOString().slice(0, 10);
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
