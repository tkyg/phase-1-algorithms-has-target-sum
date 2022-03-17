function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++){
    const variable = target - array[i]
    for (let j = i+1; j < array.length; j++){
      if (array[j] === variable) return true;
    }
  }
  return false
  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  an array has a list of numbers, pair of which must equal to the target number
  itirate through the array by pairing numbers and checking if the pair equals to the target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
