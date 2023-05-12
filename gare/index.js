let saveEl = document.getElementById("textvalue")
let countEl = document.getElementById("count-el")
let count = 0
countEl.textContent = count

let savecount = []


function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    addValueToArray(savecount, count)
    saveEl.textContent = savecount.join ("-")
}

// Google:
// innerText alternative mdn

function addValueToArray(arr, value) {
  if (arr.length === 3) {
    // Remove the first element
    arr.shift();
  }
  // Add the new value to the end
  arr.push(value);
  return arr;
}
