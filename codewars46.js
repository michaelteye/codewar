// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

// Examples(Input ==> Output)


function isPalindrome(line) {
    let tryit = line.toString()
    let mysplit = tryit.split('')
    let myreverse= mysplit.reverse()
    let myjoin = myreverse.join('')
    if(myjoin ==  line){
      return true
    }else{
      return false
    }
  
  //   return undefined;
  }
  console.log(1234)

