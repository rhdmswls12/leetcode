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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let newTree = []
    
    function dfs(node) {
        if(!node) return
        dfs(node.left)
        newTree.push(node.val)
        dfs(node.right)
    }
    dfs(root)
    let treeNode = new TreeNode(0)
    let curr = treeNode
    
    for(let item of newTree) {
        curr.right = new TreeNode(item)
        curr = curr.right
    }
    return treeNode.right
};