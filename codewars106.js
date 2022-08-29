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

