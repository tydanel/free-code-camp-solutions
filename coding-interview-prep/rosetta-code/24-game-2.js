function getPermutations(inputArr) {
  const result = [];
  
  function permute(arr, m = []) {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        const curr = [...arr];
        const next = curr.slice(i, i+1);
        permute(
          [ ...curr.slice(0, i), ...curr.slice(i+1) ]
        , m.concat(next)
        );
      }
    }
  }
  
  permute(inputArr);
  return result;
}

function getAllOperatorCombinations() {
  const operators = ['+', '-', '*', '/'];
  const result = [];

  function generateCombos(curr, level) {
    if (level === 3) {
      result.push(curr);
      return;
    }
    for (let i = 0; i < operators.length; i++) {
      const next = curr + operators[i];
      generateCombos(next, level + 1);
    }
  }

  generateCombos('', 0);
  return result.map(a => a.split(''));
}

function solve24 (numStr) {
  const nums = getPermutations(numStr.split('').map(Number));
  const ops = getAllOperatorCombinations();

  for ( const [n1, n2, n3, n4] of nums ) {
    for ( const [o1, o2, o3] of ops ) {
      const str1 = `(${n1}${o1}${n2})${o2}(${n3}${o3}${n4})`;
      const str2 = `(${n1}${o1}${n2}${o2}${n3})${o3}${n4}`;

      if ( eval(str1) == 24 ) {
        return str1;
      }
      if ( eval(str2) == 24 ) {
        return str2;
      }
    }
  }

  return "no solution exists";
}
