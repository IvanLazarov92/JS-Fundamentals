function solve(curBookPages, pagesPerHour, days) {
  const pagesPerDay = curBookPages / days;
  const hoursReadingPerDay = pagesPerDay / pagesPerHour;
  console.log(hoursReadingPerDay);
}
solve(212, 20, 2);
solve(432, 15, 4);
