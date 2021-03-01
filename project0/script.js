const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let todoCount = parseInt(itemCountSpan.innerText)
let uncheckedCount = parseInt(uncheckedCountSpan.innerText)

function newTodo() {
  const text = prompt('New todo:')

  if (!text) return

  const todoText = document.createElement('span')
  todoText.innerText = text
  todoText.classList.add(classNames.TODO_TEXT)

  const todoCheckbox = document.createElement('input')
  todoCheckbox.setAttribute('type', 'checkbox')
  todoCheckbox.classList.add(classNames.TODO_CHECKBOX)
  todoCheckbox.addEventListener('change', onToggleCheckbox)

  const todoDelete = document.createElement('button')
  todoDelete.innerText = 'Delete'
  todoDelete.classList.add(classNames.TODO_DELETE)
  todoDelete.addEventListener('click', onDeleteTodo)

  const todo = document.createElement('li')
  todo.classList.add(classNames.TODO_ITEM)
  todo.appendChild(todoCheckbox)
  todo.appendChild(todoText)
  todo.appendChild(todoDelete)

  list.appendChild(todo)
  
  todoCount++
  uncheckedCount++
  showCount()
}

function onToggleCheckbox(event) {
  const isChecked = event.target.checked
  if (isChecked) {
    uncheckedCount--
  } else {
    uncheckedCount++
  }
  showCount()
}

function onDeleteTodo(event) {
  const isChecked = event.target.checked
  if (!isChecked) uncheckedCount--
  todoCount--
  showCount()

  const todo = event.target.parentNode
  todo.remove()
}

function showCount() {
  itemCountSpan.innerText = todoCount
  uncheckedCountSpan.innerText = uncheckedCount
}
