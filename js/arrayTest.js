let substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

let arrayTest = [
  {
    name: "Lauren Worthington",
    age: 24,
    size: "small",
    distance: 2 
  },
  {
    name: "Lisa Worthington",
    age: 47,
    size: "medium",
    distance: 4 
  },
  {
    name: "Kim Kardashian",
    age: 38,
    size: "x-small",
    distance: 2 
  },
  {
    name: "Kanye West",
    age: 42,
    size: "large",
    distance: 3 
  }
]
  
$('#racer-name .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'arrayTest',
  source: substringMatcher(arrayTest)
});
