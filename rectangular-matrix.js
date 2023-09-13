/*
Given a rectangular matrix of characters, add a asterisk (*) to it.

Input: For picture ['abc','xyx']

result : ['******', '*abcd*', '*xyzv*', '******']
*/

function rectangle(arr) {
    if(!arr.length){
        return
    }
    let charLength = arr[0].length
    let rectArr = []
    rectArr.push("*".repeat(charLength+2))
    for(let i = 0;i<arr.length;i++) {
        rectArr.push("*"+arr[i]+"*")
    }
    rectArr.push("*".repeat(charLength+2))
    return rectArr
    
}

rectangle(["abcd", "xyzv"])
