/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    
    for (let i=0; i<tokens.length; i++) {
        if(Number(tokens[i]) || Number(tokens[i] == 0)) {
            stack.push(Number(tokens[i]))
            console.log(stack)
        } else {
            let result = calculate(stack.pop(), stack.pop(), tokens[i])
            stack.push(result)
            console.log(stack)
        }
    }
    return stack.pop()
};
const calculate = (num1, num2, operator) => {
    if (operator === '+') return num2 + num1
    if (operator === '-') return num2 - num1
    if (operator === '*') return num2 * num1
    if (operator === '/') return Math.trunc(num2 / num1)
}