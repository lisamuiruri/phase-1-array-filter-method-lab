// Code your solution here
function findMatching(drivers, query) {
  return drivers.filter(driver =>
    driver.toLowerCase() === query.toLowerCase()
  );
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver =>
    driver.toLowerCase().startsWith(letters.toLowerCase())
  );
}

function matchName(drivers, query) {
  return drivers.filter(driver =>
    driver.name === query
  );
}
