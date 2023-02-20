function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
  
    const tab = document.querySelector('.tab');
    let open = false;
  
    tab.addEventListener('click', function() {
      if (sidebar.classList.contains('open')) {
        console.log("The sidebar is open.");
        tab.style.right = '0';
      } else {
        console.log("The sidebar is closed.");
        tab.style.right = '-40px';
      }
    });
  }
  