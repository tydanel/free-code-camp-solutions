const getFinalOpenedDoors = numDoors =>
  [...(new Array(numDoors))]
    .reduce((acc, _cur, idx) => 
      Math.sqrt(idx + 1) % 1 == 0 
        ? [...acc, idx + 1] 
        : acc, []);
