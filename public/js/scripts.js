// let viewTasks = new Request("../data.json");

// fetch(viewTasks)
//   .then(function (task) {
//     return task.json();
//   })
//   .then(function (data) {
//     console.log(data.reverse());
//   });

document.getElementById('view-task').addEventListener('click', getTitle);

function getTitle() {
  // fetch('../data.json')
  //   .then(function (res) {
  //     return res.json();
  //   })
  //   .then(function (data) {
  //     console.log(data.reverse());
  //   });
  // fetch('../data.json')
  fetch('http://localhost:3000/api/todos')
    .then((res) => res.json())
    .then((data) => {
      let output = '<p>To do:</p>';
      data.forEach(function (task) {
        output += `
          <ul>
            <li>Task ${task.id}: ${task.title}</li>
          </ul>
        `;
      });
      document.getElementById('display').innerHTML = output;
    });
}