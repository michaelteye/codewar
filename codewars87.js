// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:
// strCount({
//     first: "1",
//     second: "2",
//     third: false,
//     fourth: ["anytime",2,3,4],
//     fifth:  null
//     })
    //returns 3

function strCount(obj){
    let count = 0;
    for (key in obj) {
        if (typeof obj[key] == 'string') count++;
        if (typeof obj[key] == 'object') count += strCount(obj[key]);
    }
    return count;
    }

// Alternative method
function strCount(obj){
    let temp = 0;
    JSON.stringify(obj,(key,value)=>{
        if (typeof value === 'string') {
            temp++
        }
        return value;
    })

    return temp
}

// Alternate method
function strCount(obj){

    let result = [];
    
     let result2 = [];
    let len = result.length
   let arr = Object.values(obj)
   let arr1 = arr.flat(Infinity)
    console.log(arr1)
   for(i=0; i<arr1.length; i++){
     if(typeof arr1[i] === "string"){
     result.push(arr1[i])  
     }else if((typeof arr1[i] === "object") && arr1[i] !== null){
       let a = Object.values(arr1[i])
       for(j=0; j<a.length; j++){
         if(typeof a[j] === "string")
         result.push(a[j])
       }
       console.log(a)
     }
       
   }
       
   
   return result.length
     
   }
   strCount([
     '1',       '2',
     false,     'anytime',
     2,         3,
     4,         null,
     undefined, {}
   ])