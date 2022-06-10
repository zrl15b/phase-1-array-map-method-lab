const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//const titleCased = tutorials.map((item) => capitalizeWords(item))

  
  function titleCased() {
  return tutorials.map(function(ele) {
    let words = ele.split(" ")
    let capWords= words.map(function(item) {
      let firstLetter = item.slice(0,1).toUpperCase()
      let restWord= item.slice(1)
      return firstLetter + restWord
    })
    return capWords.join(" ")
  })
}

  