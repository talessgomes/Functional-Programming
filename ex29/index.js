function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let orbitalPeriodArray = [];


    arr.forEach(function (dataPoint) {
        console.log(dataPoint.name);
        let translateDataPoint = {};

        let twoPie = Math.PI * 2;
        let earthRadiusPlusAverageAltitude = earthRadius + dataPoint.avgAlt;
        // multiplica ao cubo
        let topOfDivider = Math.pow(earthRadiusPlusAverageAltitude, 3);

        let numberToSquare = topOfDivider / GM;
        let squaredResult = Math.sqrt(numberToSquare);
        let orbitalPeriodResult = twoPie * squaredResult;

        console.log(orbitalPeriodResult);

        translateDataPoint.name = dataPoint.name;
        translateDataPoint.orbitalPeriod = Math.round(orbitalPeriodResult);

        orbitalPeriodArray.push(translateDataPoint)
    })
    return orbitalPeriodArray;
}

console.log(orbitalPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 }
]));
                  /*[
    { name: 'iss', orbitalPeriod: 5557 },
    { name: 'hubble', orbitalPeriod: 5734 },
    { name: 'moon', orbitalPeriod: 2377399 } 
  ] */