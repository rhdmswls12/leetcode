/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    let answer = 0
    function dfs(nodeO, nodeC) {
        if(!nodeO) {
            return
        }
        if (nodeO === target) {
            answer = nodeC
            return
        }
        dfs(nodeO.left, nodeC.left)
        dfs(nodeO.right, nodeC.right)
    }
    dfs(original, cloned)
    return answer
};