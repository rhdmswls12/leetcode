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
    
    const dfs = (x, y, oldColor, newColor) => {
        
        if (x<0 || x>=image.length || y<0 || y>=image[0].length || image[x][y] !== oldColor) return
    
        image[x][y] = newColor
        
        dfs(x+1, y, oldColor, newColor)
        dfs(x, y+1, oldColor, newColor)
        dfs(x-1, y, oldColor, newColor)
        dfs(x, y-1, oldColor, newColor)
    }
    
    dfs(sr, sc, oldColor, newColor)
    return image
};

