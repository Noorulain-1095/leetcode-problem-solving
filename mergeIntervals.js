/* 
  Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
  and return an array of the non-overlapping intervals that cover all the intervals in the input.
  
Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6]

*/

var merge = function(intervals) {
    intervals.sort((a,b) => a[0]-b[0])
    let stack = [intervals[0]]
    let length = intervals.length
    for(let i=1;i< length;i++){
    let current = stack.length-1
        if(stack[current][1] >= intervals[i][0]) {
           let newInt = [Math.min(stack[current][0],intervals[i][0]),Math.max(stack[current][1],intervals[i][1])]
            stack.pop()
            stack.push(newInt)
         }
        else {
            stack.push(intervals[i])
        }
    }
    return stack 
};

// merge([[1,3],[2,6],[8,10],[15,18]])
// merge([[1,4],[0,0]])
// merge([[1,4],[0,1]])
// merge([[0,1],[1,4]])
//merge([[1,4],[1,4]])
// merge([[1,4],[0,2],[3,5]])
merge([[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]])
