const findLongestWord = function(string = '') {
    // Write code under this line
      let items = string.split(' ');
      let longestWord = items[0];
        for (const item of items) {
          if (item.length > longestWord.length) {
            longestWord = item;
          }
        }
      return longestWord;
    }
    console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
      // 'jumped'
    console.log(findLongestWord('Google do a roll'));
      // 'Google'
    console.log(findLongestWord('May the force be with you'));
      // 'force'
    
    //console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
    // 'jumped'
    
    //console.log(findLongestWord('Google do a roll'));
    // 'Google'
    
    //console.log(findLongestWord('May the force be with you'));
    // 'force'