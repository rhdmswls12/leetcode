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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let q = [root]
    let result = []
    
    while(q.length) {
        let len = q.length
        let group = []
        let sum = 0
        for (let i=0; i<len; i++) {
            let curr = q.shift()
            sum += curr.val
            
            if (curr.left) q.push(curr.left)
            if (curr.right) q.push(curr.right)
        }
        result.push(sum/len)
    }
    return result
};
