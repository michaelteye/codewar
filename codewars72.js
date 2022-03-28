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

function abbrevName(name){
    if (typeof name === 'string') {
      let names = name.split(' ');
      return `${names[0][0]}.${names[1][0]}`.toUpperCase();
    }
    console.log(arguments.callee.name + ': Argument must be string!');
}