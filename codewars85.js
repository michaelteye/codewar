function sortList (sortBy, list) {
    return list.sort(function(a, b){
      return a[sortBy] < b[sortBy];  
    })
  }