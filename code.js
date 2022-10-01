function solution(statues) {
    let smallest = Math.min(...statues)
    let largest = Math.max(...statues)
    let count = largest - smallest + 1
    return count - statues.length
 }
console.log(solution([6,2,3,8]))