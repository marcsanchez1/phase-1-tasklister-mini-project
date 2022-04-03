const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    createTodo(e.target.newTodo.value)
  })

function createTodo(todo) {
  const li = document.createElement('li')
  const btn = document.createElement('button')
  
  btn.addEventListener('click', deleteTask)
  btn.textContent = 'X'
  li.textContent = `${todo} `
  li.append(btn)
  console.log(li)
  document.querySelector('#tasks').append(li)
}

function deleteTask(e) {
  e.target.parentNode.remove()
}

