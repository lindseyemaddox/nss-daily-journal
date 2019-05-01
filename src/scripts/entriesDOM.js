
// code that is responsible for modifying the DOM

const entries = [];

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
};