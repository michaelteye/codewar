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