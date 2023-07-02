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

//ChatGPT Prompt :
//I got an array of maximum 3 integers. I can add integers to the array. If the array is full, then we drop the first value and add the new value at the end.
//Give me a function javascript function that takes in input the array and the new value.