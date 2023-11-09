/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    
    for (let i=0; i<tokens.length; i++) {
        if (!Number(tokens[i]) && Number(tokens[i]) !== 0) {
            let result = calculate(Number(stack.pop()), Number(stack.pop()), tokens[i])
            stack.push(result)
        } else {
            stack.push(tokens[i])
        }
    }
    if (stack.length === 1) return stack[0]
};

const calculate = (num1, num2, operator) => {
    if (operator === '+') return num2 + num1
    if (operator === '-') return num2 - num1
    if (operator === '*') return num2 * num1
    if (operator === '/') return Math.trunc(num2 / num1)
}