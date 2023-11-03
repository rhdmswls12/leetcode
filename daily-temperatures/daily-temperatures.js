/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = []
    let result = new Array(temperatures.length).fill(0)
    
    for (let i=0; i<temperatures.length; i++) {
        stack.push(temperatures[i])
        for (let j=i+1; j<temperatures.length; j++) {
            if (stack[stack.length-1] < temperatures[j]) {
                stack.pop()
                result[i] = j-i
                break
            } else {
                result[i] = 0
            }
        }
    }
    return result
};