/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let count = 0
    
    function dfs(idx, sum, target) {
        if (idx === nums.length) {
            if (sum === target) {
                count++
            } 
            return
        }
        
        dfs(idx+1, sum+nums[idx], target)
        dfs(idx+1, sum-nums[idx], target)
    }
    dfs(0, 0, target)
    return count
};