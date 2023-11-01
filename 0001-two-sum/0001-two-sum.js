/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const indices = {};
    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];
        if (difference in indices) {
            return [indices[difference], i];
        }
        indices[nums[i]] = i;

    }

    return [];
    
};