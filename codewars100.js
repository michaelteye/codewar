//Create a function that count the number of vowels in a given sentence.
const checkAllVowel= (myvowel)=>{
    let allvowel = ['a','e','i','o','u'];
    return myvowel.split('').filter(trycheck=>{
        return allvowel.includes(trycheck)? true: false
    }).length
}
//Print out the number of vowels in an example sentence provided by you.

console.log(checkAllVowel("the number of vowels will be shown here"))


