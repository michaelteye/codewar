function sortList (sortBy, list) {
    return list.sort(function(a, b){
      return a[sortBy] < b[sortBy];  
    })
  }

// Alternative
function sortList (sortBy, list) {
    return list.sort(function(a, b) {    
      if (a[sortBy] < b[sortBy]) {
        return 1;
      }
      else if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      else {
        return 0;
      }
      
    });
  }
// Alternative solutions

  function sortList (sortBy, list) {
    function cmp(value1,value2){
     return value2[sortBy]-value1[sortBy];
  };
  list.sort(cmp);
    return list;
}