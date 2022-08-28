// Pig latin is created by taking all the consonants before the first vowel of a word and moving them to the back of the word followed by the letters "ay".
// "hello" => "ellohay"
// "creating" => "eatingcray"


function translate(sentence) {
    return sentence.replace(/\b([bcdfghjklmnpqrstvwxyz]*)(\w+)\b/gi, function(_, first, rest) {
      if (first) {
        if (first[0] == first[0].toUpperCase()) rest = rest[0].toUpperCase() + rest.slice(1)
      } else {
        first = 'w'
      }
      
      return rest + first.toLowerCase() + 'ay'
    })
  };

// alternative solution
function translate(sentence) {
    return sentence.replace(/\b([bcdfghjklmnpqrstvwxyz]*)(\w)(\w*)\b/gi, (all, cons, cap, rest) => {
      if(!cons)
        return all + 'way';
      if(/[A-Z]/.test(cons[0])) {
        cap = cap.toUpperCase();
        cons = cons.toLowerCase();
      }
      return cap + rest + cons + 'ay';
    });
  };

// alternative solution
function translate(sen) {
    //this regex will select the word in 3 parts: match= whole word, p1= consonant part, p2= the rest
    //p1 and p2 would be undefined, if the word starts with a vowel
    return sen.replace(/\b([^aeiouAEIOU\s][^aeiouyAEIOU\s]*)(\w*)\b|\b[aeiouAEIOU]+\w*\b/gm, scramble);

    function scramble(match, p1, p2) {
        var word;
        //if the word starts consonant, put first part at the end and append "ay"
        if (p1) {
          word = p2 + p1.toLowerCase()+ "ay";//consonant part in lowercase
            //if the word starts with upper case consonant, put first letter in new word in upper case
            //and make p2 lowercase
            if (p1.charAt(0).toUpperCase() == p1[0]) {
                word = word.charAt(0).toUpperCase() + word.slice(1);
            }
            return word;
        }
        //if the word starts with a vowel, append "way"
        if (!p1) {
            return match + "way";
        }
    }
}