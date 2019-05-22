function distanceFromHqInBlocks(distance) {
  return Math.abs(42 - distance);
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
//  console.log(distance);
  if (distance < 400) {
    return 0;
  }
  else if (distance < 2000) {
    return (distance - 400) * .02;
  }
  else if ((distance > 2000) && (distance < 2500)) {
    return 25;
  }
  else {
    return 'cannot travel that far';
  }
}
// distanceTravelledInFeet(34, 38)
// representing 34th St to 38th St, returns 1056 ((38-34)*264).
