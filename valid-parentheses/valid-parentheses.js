/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let array = []
    let newArray = []
    let stack = []
    array = s.split('')
    
    array.forEach(a => {
        if (a === '(') newArray.push(-1)
        if (a === ')') newArray.push(1)
        if (a === '{') newArray.push(-2)
        if (a === '}') newArray.push(2)
        if (a === '[') newArray.push(-3)
        if (a === ']') newArray.push(3)
    })
    
    const sum = newArray.reduce((acc, cur) => (acc + cur), 0)
    
    if (sum) return false
    
    newArray.forEach(a => {
        
        if ((stack[stack.length-1]*(-1) === a) && (stack[stack.length-1] < 0) ) {
            stack.pop()
        } else {
            stack.push(a)
        }
    })
    console.log(stack)
    if (stack.length) {
        return false
    } else {
        return true
    }
};