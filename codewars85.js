function sortList (sortBy, list) {
    return list.sort(function(a, b){
      return a[sortBy] < b[sortBy];  
    })
  }

// Alternative

// Alternative solutions

  function sortList (sortBy, list) {
    function cmp(value1,value2){
     return value2[sortBy]-value1[sortBy];
  };
  list.sort(cmp);
    return list;
}


// alternative solution
