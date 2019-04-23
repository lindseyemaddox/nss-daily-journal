
console.log("hello, darlin'");

// Define the keys and value for a JavaScript object that
// represents a journal entry about what you learned today

// addJournalEntry = (journalEntry) => {
//   return `
//     <div class="journalEntry">
//       <h2>${journalEntry.date}</h2>
//       <p>Concepts Covered: ${journalEntry.concepts}</p>
//       <p>Entry: ${journalEntry.entry}</p>
//       <p>Mood: ${journalEntry.mood}</p>
//     </div>
//   `
// }

myJournalEntry = {
  date: "April 23",
  concepts: "It'll Get Better",
  entry: "Ugly cried a lot today.",
  mood: "tearful"
}


// define an appropriately named variable that will have the value of an array

const entries = [];


// use the push() method to add the journal entry objects you defined above to the array

function addJournalEntry(entryObject) {
  entries.push(entryObject);
  console.log("entries", entries);
};


var date = document.getElementById("date");

function collectEntryItems() {
  date.innerHTML = event.target.value;
};


addJournalEntry(myJournalEntry);

document.getElementById("submit").addEventListener("click", function () {
  collectEntryItems();
});