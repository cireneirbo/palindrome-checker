function palindrome(str) {
  let symbols = ['!', '@', '#', '$', '%', '^', '&', 
          '*', '(' , ')', ' ', ',' , '.', '_', '-',
          '/', '\\', '|', ';', ':', '=', '+', '`', '~',
          '<', '>', '?'];
  let chars = str.toLowerCase().split('');
  let charsReversed = [];
  
  for(let c = 0; c < chars.length; c++){
    for(let i = 0; i < symbols.length; i++) {
      if(chars[c].includes(symbols[i])) {
        chars[c] = '';
      } else {
      }
    }
  }
  
  for(let k = chars.length; k > -1; k--) {
    charsReversed.push(chars[k]);
  }
  
  chars = chars.join('')
  charsReversed = charsReversed.join('');

  if(chars === charsReversed) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("eye of The MIND!"));
