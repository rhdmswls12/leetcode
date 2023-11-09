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
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    let answer = 0
    
    function dfs(node, str) {
        if (!node) return
        str += (node.val).toString()
        if (!node.left & !node.right) answer += parseInt(str, 2)
        
        dfs(node.left, str)
        dfs(node.right, str) 
    }
    dfs(root, '')
    return answer
};