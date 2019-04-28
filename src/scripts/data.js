
// code that deals with getting the data

let submit = document.getElementById("submit");

function collectEntryItems() {
  const myJournalEntry = {
    date: document.getElementById("date").value,
    concepts: document.getElementById("concepts").value,
    entry: document.getElementById("entry").value,
    mood: document.getElementById("mood").value
  }
  addJournalEntry(myJournalEntry);
};


submit.addEventListener("click", function () {
  collectEntryItems();
});