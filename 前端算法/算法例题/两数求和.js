/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const diffs = {}
  for (let i = 0; i < nums.length; i++) {
    if (diffs[target - nums[i]] !== undefined) {
      return [target - nums[i], nums[i]]
    }
    diffs[nums[i]] = i;
    console.log(diffs);
  }
}

const result = twoSum([1, 2, 4, 4, 5], 5);
console.log('result :>> ', result);