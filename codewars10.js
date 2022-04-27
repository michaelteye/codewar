// Given two arrays, a1 and a2, sort the elements of a2 
// based on the the index of the word in a1 that begins with the same letter.

function sortArray(a1, a2) {
    let newArr = [];
    for(let i = 0; i < a1.length; i++) { 
        for(let j = 0; j < a2.length; j++) {
            if(a2[j][0] === a1[i][0]) newArr.push(a2[j])       
        }
    }
    return newArr
}