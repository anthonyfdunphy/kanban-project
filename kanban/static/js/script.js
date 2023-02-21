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
  