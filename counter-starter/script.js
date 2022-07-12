function add(number) {
  let counter = document.getElementById("number");
  let newValue = parseInt(counter.innerHTML) + number

  counter.innerHTML = newValue
}

function subtract(number) {
  let counter = document.getElementById("number");
  let newValue = parseInt(counter.innerHTML) - number

  counter.innerHTML = newValue
}