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
    let q = [root]
    let result = []
    
    if (!root) return []
    
    while(q.length) {
        let len = q.length
        let sameLevel = []
        for (let i=0; i<len; i++) {
            let curr = q.shift()
            sameLevel.push(curr.val)
            if (curr.left) q.push(curr.left)
            if (curr.right) q.push(curr.right)
        }
        result.push(sameLevel)
    }
    return result
};