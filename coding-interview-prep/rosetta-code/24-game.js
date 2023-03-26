/** start Chat-GPT */
function getPermutations(inputArr) {
  const result = [];
  
  function permute(arr, m = []) {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  }
  
  permute(inputArr);
  return result;
}
/** end Chat-GPT */

/** My terrible solutiuon xD
 * Not very efficient but it passes the tests
 */
function solve24 (numStr) {
  const ops  = getPermutations([
    '*', '/', '+', '-', 
    '*', '/', '+', '-',
  ]);
  const nums = getPermutations(numStr.split(''));

  for ( let i = 0; i < nums.length; i++ ) {
    const [a,b,c,d] = nums[i];
    for ( let ii = 0; ii < ops.length; ii++ ) {
      const [o1,o2,o3] = ops[ii];
      const str1 = `(${a}${o1}${b})${o2}(${c}${o3}${d})`;
      const str2 = `(${a}${o1}${b}${o2}${c})${o3}${d}`;

      if ( Math.floor(eval(str1)) === 24 ) {
        return str1;
      }

      if ( Math.floor(eval(str2)) === 24 ) {
        return str2
      }

    }
  }
  return "no solution exists";
}
