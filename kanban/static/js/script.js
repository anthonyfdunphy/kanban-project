$(document).ready(function() {
  $('#submit-button').click(function(event) {
    event.preventDefault(); // Prevent the default form submission
    $.ajax({
      url: $('#task-form').attr('action'),
      method: 'POST',
      data: $('#task-form').serialize(),
      success: function(response) {
        location.reload(); // Refresh the page after successful submission
      }
    });
  });
});

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
  