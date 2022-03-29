function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }
// Alternative
function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}
//Alternative using ragex
const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()