// tasks.js
const taskForms = document.querySelectorAll('.task-form');

taskForms.forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const taskId = form.dataset.taskId;
    const newStatus = form.elements['status'].value;
    updateTaskStatus(taskId, newStatus);
  });
});

function updateTaskStatus(taskId, newStatus) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/update-task-status');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  const csrfToken = document.querySelector('input[name="csrfmiddlewaretoken"]').value;
  xhr.setRequestHeader('X-CSRFToken', csrfToken);
  xhr.onload = function() {
    if (xhr.status === 200) {
      const updatedTask = JSON.parse(xhr.responseText);
      const taskForm = document.querySelector(`#task-form-${updatedTask.id}`);
      taskForm.elements['status'].value = updatedTask.status;
    }
  };
  xhr.send(`id=${taskId}&status=${newStatus}`);
}



const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function() {
  console.log('Hamburger clicked');
  hamburger.classList.toggle("is-active");

  var sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('open');
  let open = false;

  if (sidebar.classList.contains('open')) {
    console.log("The sidebar is open.");
    document.documentElement.style.setProperty('--tab-width', '20%');
    document.documentElement.style.setProperty('--opacity-level','1');
  } else {
    console.log("The sidebar is closed.");
    document.documentElement.style.setProperty('--tab-width', '0%');
    document.documentElement.style.setProperty('--opacity-level','0');
  }

});


function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
  
    const tab = document.querySelector('.tab-expand');
    let open = false;
  
    tab.addEventListener('click', function() {
      if (sidebar.classList.contains('open')) {
        console.log("The sidebar is open.");
        document.documentElement.style.setProperty('--tab-width', '20%');
        document.documentElement.style.setProperty('--opacity-level','1');
      } else {
        console.log("The sidebar is closed.");
        document.documentElement.style.setProperty('--tab-width', '0%');
        document.documentElement.style.setProperty('--opacity-level','0');
      }
    });
  }
  