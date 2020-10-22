// References to HTML document
let input = document.getElementById('taskIn');
let ul = document.getElementsByTagName('ul')[0];

let tasks = [];

let completed = 0;

// Adds task to array if the add button is pushed and input field is not empty
function addTask() {
  // make sure the input field is not empty
  if (input.value != '') {
    // collect time
    let date = new Date();
    let time = date.getTime();
    let task = { Time: time, Task: input.value, checked: false };

    // add task object to tasks array, and write to console
    tasks.push(task);
    console.log(tasks); // for displaying array in console -- debug

    updateList(); // write tasks to html list
    input.value = ''; // empty field after todo is added
  }
}

// Updates list element on page
function updateList() {
  taskList.innerHTML = '';

  // iterate through task-array, adding to html-page
  for (let task of tasks) {
    let li = document.createElement('li');
    let check = document.createElement('input');
    let label = document.createElement('label');

    check.setAttribute('type', 'checkbox');
    check.setAttribute('id', tasks.indexOf(task));
    check.addEventListener('click', checkit);

    label.innerHTML = task.Task;

    if (task.checked) {
      check.setAttribute('checked', true);
    }

    li.appendChild(check); // add checkbox
    li.appendChild(label); // add label
    ul.insertBefore(li, ul.firstChild);
  }
  counter.innerHTML = completed + '/' + tasks.length;
}

// updates output based on amount of checked boxes
function checkit() {
  let index = event.target.id;

  if (!tasks[index].checked) {
    tasks[index].checked = true;
    completed++;
  } else {
    tasks[index].checked = false;
    completed--;
  }
  updateList();
}
