// This time we learn two methods to split or merge string:split() and concat(). 
// Also learn a good friend of the split() method: join(). It is an Array method. Their usage:

function splitAndMerge(string, separator){ 
    return string.split(" ").map(addall => addall.split("").join(separator)).join(" ")
};