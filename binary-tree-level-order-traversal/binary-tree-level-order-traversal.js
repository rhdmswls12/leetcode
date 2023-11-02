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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let currentLevel = []
    let result = []
    if (root) {
        currentLevel.push(root)
    }
    while (currentLevel.length) {
        let current = []
        let len = currentLevel.length
        for (let i=0; i<len; i++) {
            let node = currentLevel.shift()
            current.push(node.val)
            if (node.left) {
                currentLevel.push(node.left)
            }
            if (node.right) {
                currentLevel.push(node.right)
            }
        }
        result.push(current)
    }
    return result
};