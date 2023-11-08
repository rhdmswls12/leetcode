/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    let q = [root]
    let result = []
    
    if (!root) return 0
    
    while(q.length) {
        let len = q.length
        let group = []
        for (let i=0; i<len; i++) {
            let cur = q.shift()
            group.push(cur.val)
            
            if (cur.children) {
                for (const child of cur.children) {
                    q.push(child)
                }
            }
        }
        result.push(group)
    }
    return result.length
};