document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const input = document.querySelector('#new-task-description')
  const taskForm = document.querySelector('#create-task-form')
  const taskUl = document.querySelector('#tasks')

  taskForm.addEventListener('submit', function(e){
    e.preventDefault()
    taskUl.innerHTML += `<li> ${input.value} </li>`
  })
});
