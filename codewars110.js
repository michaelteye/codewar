function numbersOfLetters(integer) {
    var hash = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var result = [];
    
    var text = 'q'.repeat(integer);
    
    do {
        text = (text.length + '').split('').map(number => hash[number]).join('');
        result.push(text);        
    } while (text != hash[text.length]);
    
    return result;
}
// alternative solution
function digitToWord(i){
    return ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'][i];
  }
  
  function numbersOfLetters(i) {
    var words = [i.toString().split('').map(digitToWord).join('')];
      while(words[words.length - 1] != "four"){
        words.push(words[words.length - 1].length.toString().split('').map(digitToWord).join(''));
      }
    return words;
  }