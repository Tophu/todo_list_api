document.getElementById('view-all').addEventListener('click', getTitle);
document.getElementById('completedToDo').addEventListener('click', completed);
document.getElementById('tasksToDo').addEventListener('click', toDo);

const jsonData = new Request('../../data.json');


// Unfortunately the code works using VSCode Live Server and not on localhost.
// Feedback would be appreciated.


// USE IMPORT INSTEAD OF MAKING A NEW REQUEST
// import jsonData from '../../data.json';
// USE JSON.parse INSTEAD OF FETCH
// JSON.parse(jsonData);

function getTitle() {
  fetch(jsonData)
    .then((res) => res.json())
    .then((data) => {
      let output = '<h2>All:</h2>';
      data.sort((a, b) => b - a).forEach(function (task) {
        // console.log(task.id);
        output += `
          <ul>
            <li>${task.title}</li>
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
      let output = `<h2>Completed: ${data.length - 110}</h2>`;
      data.forEach(function (task) {
        if (task.completed !== true) {
          return task
        };
        // console.log(task.completed);
        output += `
        <ul>
          <li>${task.title}</li>
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
      let output = `<h2>To Do: ${data.length - 90}</h2>`;
      data.forEach(function (task) {
        if (task.completed === true) {
          return task
        };
        // console.log(task.completed);
        output += `
        <ul>
          <li>${task.title}</li>
        </ul>
      `;
      });
      document.getElementById('display').innerHTML = output;
    });
}
