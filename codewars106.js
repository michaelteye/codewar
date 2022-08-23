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