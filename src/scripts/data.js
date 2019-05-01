
// code that deals with getting the data

const API = {
  getJournalEntries() {
    return fetch("http://localhost:3000/entries")
      .then(response => response.json());
  }
};


let submit = document.getElementById("submit");

// function getJournalEntries() {
//   const myJournalEntry = {
//     date: document.getElementById("date").value,
//     concepts: document.getElementById("concepts").value,
//     entry: document.getElementById("entry").value,
//     mood: document.getElementById("mood").value
//   };
//   addJournalEntry(myJournalEntry);
// };



