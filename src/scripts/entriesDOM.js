
// code that is responsible for modifying the DOM

// define an appropriately named variable that will have the value of an array

const entries = [];

// use the push() method to add the journal entry objects you defined above to the array

function addJournalEntry(entryObject) {
  entries.push(entryObject);
  buildTheDom();
};

let output = document.getElementById("output");

let buildTheDom = () => {
  output.innerHTML = "";
  for (var i = 0; i < entries.length; i++) {
    let journalEntry = entries[i];
    output.innerHTML += entryComponent(journalEntry);
  };
}