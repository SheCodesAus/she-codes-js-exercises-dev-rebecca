let shoppingListItems = []
let inputField = document.getElementById("new-item-text")

function addItem() {
  shoppingListItems.push(inputField.value)
  
  updateItems()
}

function updateItems() {
  let shoppingList = document.getElementById("shopping-list-items")
  shoppingList.innerHTML = ''

  shoppingListItems.forEach((item) => {
    let listItem = document.createElement("li")
    listItem.innerHTML = item
    
    shoppingList.appendChild(listItem)
  })
}

function clearItems() {
  shoppingListItems = []
  inputField.value = ''

  updateItems()
}