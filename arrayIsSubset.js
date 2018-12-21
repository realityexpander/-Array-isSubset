function isSubset (array, sub) {

  let c = 0;

  // loop over each char of 1st arry looking for 1st char of 2nd array
  for(let i=0; i < array.length; i++) {
    console.log(array[i], sub[c])
    if (array[i] === sub[c]) {
      c++;
      if (c >= sub.length) {
        return true;
      }
    } else {
      c = 0;
    }
  }

  return false;

}

console.log(isSubset([1,2,3,4], [2,3,4]))
