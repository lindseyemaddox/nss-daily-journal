
console.log("hello, darlin'");

// Define the keys and value for a JavaScript object that
// represents a journal entry about what you learned today

const objectsJournalEntry = {
  objects = {
    basicInfo: "the building blocks for everything js, a method of defining details of a single thing",
    curlyBraces: true,
    squareBrackets: false,
    contain: "keys and values separated by a colon, pairs are called properties",
    dataCommaSeparated: true,
    canBeAssignedToAVariable: true,
    endsInSemicolon: false
  },
  arrays = {
    basicInfo: "collections of similar things",
    curlyBraces: false,
    squareBrackets: true,
    contain: "keys and values separated by a colon, pairs are called properties",
    dataCommaSeparated: true,
    canBeAssignedToAVariable: true,
    endsInSemicolon: false
  }
};

const notationJournalEntry = {
  dotNotation = {
    example: "variableContainingTheObject.keyName"
  },
  bracketNotation = {
    example: 'variableContainingTheObject["keyName"]'
  }
};

// define an appropriately named variable that will have the value of an array

const entries = []

// use the push() method to add the journalEntry objects you defined above to the array

function addEntry() {
  entries.push(objectsJournalEntry);
}

function addEntry() {
  entries.push(notationJournalEntry);
}

console.log(entries);