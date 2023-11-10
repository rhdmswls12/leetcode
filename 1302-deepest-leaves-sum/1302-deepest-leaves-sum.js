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
var deepestLeavesSum = function(root) {
    let q = [root]
    let levels = []
    
    while(q.length) {
        let len = q.length;
        let group = []
        for (let i=0; i<len; i++) {
            let cur = q.shift()
            group.push(cur.val)
            
            if (cur.left) q.push(cur.left)
            if (cur.right) q.push(cur.right)
        }
        levels.push(group)
    }
    const sum = levels[levels.length-1].reduce((acc, cur) => (acc + cur), 0)
    return sum
};