/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const oldColor = image[sr][sc]
    
    if (oldColor === newColor) return image
    
    function dfs(x, y) {
        if (x<0 || x>=image.length || y<0 || y>=image[0].length) return
        if (image[x][y] === oldColor) {
            image[x][y] = newColor
            dfs(x+1, y)
            dfs(x, y+1)
            dfs(x-1, y)
            dfs(x, y-1)
        }
    }
    dfs(sr, sc)
    return image
};