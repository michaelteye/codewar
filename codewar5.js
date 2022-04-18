// You are given an array of values.

//Sum every number value in the array, and any nested arrays (to any depth).

//Ignore all other types of values.


function arraySum(arr) {
    var output = 0;
    for (var i in arr) {
      var item = arr[i];
      if ( typeof(item) === "number"  )  { output += item;           }
      if ( item.constructor === Array )  { output += arraySum(item); }
    }
    return output;
  }


  function arraySum(arr) {
    var trys = 0
    for(var i=0; i< arr.length; i++){
      var mes = arr[i]
      if(Array.isArray(mes)){
        trys += arraySum(mes)
      }if( typeof mes === 'number'){
        trys += mes
      }
    }
    return trys
  }