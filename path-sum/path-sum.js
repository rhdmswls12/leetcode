/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    function dfs(node, sum, targetSum) {
        if (!node) return false
        sum += node.val
        if (!node.left && !node.right) {
            if (sum === targetSum) return true
            return false
        }
        return (dfs(node.left, sum, targetSum) || dfs(node.right, sum, targetSum))
    }
    return dfs(root, 0, targetSum)
};