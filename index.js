// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driverName => {
        const driverLower = driverName.toLowerCase();
        const nameLower = name.toLowerCase();
        return driverLower === nameLower;
    })
}

function fuzzyMatch(drivers, prefix) {
    return drivers.filter(driverName => {
      if (driverName.startsWith(prefix)) {
          return true;
      }
    });
}

function matchName(drivers, string) {
    return drivers.filter(driver => {
        if (driver.name === string) {
            return true;
        }
    })
}