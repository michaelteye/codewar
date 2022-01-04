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




  // alternative

  const digits = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
};

function convertInteger(integer) {
    return [...integer+""].map(digit => digits[digit]).join("");
}

function numbersOfLetters(integer) {
    const arr = [convertInteger(integer)];

    while (true) {
        const item = arr[arr.length-1];
        const int = convertInteger(item.length);
        if (item !== int) arr.push(int);
        if (item.length === int.length) break
    }
    return arr;
}