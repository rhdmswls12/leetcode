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
    
    if(!root) return []
    
    while(q.length) {
        let len = q.length
        let group = []
        for (let i=0; i<len; i++) {
            let cur = q.shift()
            group.push(cur.val)
            
            if (cur.left) q.push(cur.left)
            if (cur.right) q.push(cur.right)
        }
        result.push(group)
    }
    return result
};