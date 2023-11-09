/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let answer = 0
    
    function dfs(x, y) {
        if (x<0 || x>=grid.length || y<0 || y>=grid[0].length) return false
        if (grid[x][y] === '1') {
            grid[x][y] = '0'
            dfs(x+1, y)
            dfs(x, y+1)
            dfs(x-1, y)
            dfs(x, y-1)  
            return true
        } 
    }
    for(let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[0].length; j++) {
            if (dfs(i,j)) answer++
        }
    }
    return answer
};