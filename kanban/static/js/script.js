  // Attach event listeners to each form
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();

      // Get the form data
      const formData = new FormData(event.target);

      // Submit the form data via AJAX
      fetch(event.target.action, {
        method: 'POST',
        body: formData
      })
      .then(response => {
        // Reload the current page after the AJAX request has completed
        window.location.reload();
      })
      .catch(error => {
        console.error(error);
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
