function palindrome(word) {
  // base case
  if (word.length <= 1) {
    return true
  }

  // general case
  // are my first and last chars the same?
  if (word[0] != word[word.length-1]) {
    return false
  }
  
  // is my substring a palindrome?

  return palindrome(word.substring(1, word.length-1))
}

console.log(palindrome('oolloo'))
console.log(palindrome('oollro'))
console.log(palindrome('olo'))
console.log(palindrome('alo'))
console.log(palindrome('l'))
console.log(palindrome(''))
