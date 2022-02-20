// You will be given an array of numbers.

// For each number in the array you will need to create an object.

// The object key will be the number, as a string. The value will be the corresponding character code, as a string.

// Return an array of the resulting objects.

// All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty.

function numObj(s){
    return s.map(n => {
      return { [n]: String.fromCharCode(n) };
    });
}

// Alternative method
function numObj(s){
    return s.map(n => {
      const obj = {};
      obj[n] = String.fromCharCode(n);
      return obj;
    });
  }

// Alternative method
function numObj(s){

    let objArr = [];
    for(let i=0; i<s.length;i++){
      let numObj = {};
      let strNum = String(s[i]);
      numObj[strNum] = String.fromCharCode(s[i]); //{'118': ''}
      objArr.push(numObj); //[{'118': ""}]
    }
    return objArr;
  }
// Alternative method
function numObj(s){
    let objArr = [];
    for(let i = 0; i < s.length; i++){
      // {"118": "v"}
      let numObj = {}; // {}
      let strNum = String(s[i]); // "118"
      numObj[strNum] = String.fromCharCode(s[i]); // {"118": ""}
      objArr.push(numObj); // [{"118": ""}]
    }
    return objArr;
  }

//alternative
const numObj = collection => collection.map(n => ({[n]: String.fromCharCode(n)}));