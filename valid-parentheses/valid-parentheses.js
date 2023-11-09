/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let parentheses = s.split('')
    let object = {
        '(': -1,
        ')': 1,
        '{': -2,
        '}': 2,
        '[': -3,
        ']': 3
    }
    parentheses.forEach(parenthese => {
        if ((stack[stack.length-1] < 0) && (object[parenthese] + stack[stack.length-1] === 0)) {
            stack.pop()
        } else {
            stack.push(object[parenthese])
        }
    })
    return stack.length ? false : true
};