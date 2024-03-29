function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var newArr = [];
  for (let i = 0; i < arr.length; i++)
  {
    var orbitalObject = arr[i];
    var avgHeight = orbitalObject.avgAlt;
    console.log("Average Height: " + avgHeight);
    var time = Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius + avgHeight,3)/GM));
    newArr.push({name: orbitalObject.name, orbitalPeriod: time})
    console.log(orbitalObject.name + " is moving around the earth in " + time);
  }
  return newArr;
}
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));
