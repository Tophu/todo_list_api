// let viewTasks = new Request("../data.json");

// fetch(viewTasks)
//   .then(function (task) {
//     return task.json();
//   })
//   .then(function (data) {
//     console.log(data.reverse());
//   });

document.getElementById('view-all').addEventListener('click', getTitle);
document.getElementById('completedToDo').addEventListener('click', completed);
document.getElementById('tasksToDo').addEventListener('click', toDo);

// let jsonData = 'http://localhost:3000/api/todos';
const jsonData = new Request('../../data.json');

function getTitle() {
  fetch(jsonData)
    .then((res) => res.json())
    .then((data) => {
      let output = '<p>All To Do:</p>';
      data.sort((a, b) => b - a).forEach(function (task) {
        // data.reverse();
        output += `
          <ul>
            <li>Task ${task.id}: ${task.title}</li>
          </ul>
        `;
      });
      document.getElementById('display').innerHTML = output;
    });
}

function completed() {
  fetch(jsonData)
    .then((res) => res.json())
    .then((data) => {
      let output = '<p>Completed:</p>';
      data.forEach(function (task) {
        if (task.completed !== true) {
          return task
        };
        output += `
        <ul>
          <li>Completed: ${task.title}</li>
          <li>Status: ${task.completed}</li>
        </ul>
      `;
      });
      document.getElementById('display').innerHTML = output;
    });
}

function toDo() {
  fetch(jsonData)
    .then((res) => res.json())
    .then((data) => {
      let output = '<p>To do:</p>';
      data.forEach(function (task) {
        if (task.completed === true) {
          return task
        };
        output += `
        <ul>
          <li>To Do: ${task.title}</li>
          <li>Status: ${task.completed}</li>
        </ul>
      `;
      });
      document.getElementById('display').innerHTML = output;
    });
}

// Use tables instead of lists?
