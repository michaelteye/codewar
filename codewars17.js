// Your task is to add a new property usersAnswer to every object in the array questions.
//  The value of usersAnswer should be set to null. 
// The solution should work for array of any length.


questions = questions.map(function(v){
    return v.usersAnswer = null, v;
  });