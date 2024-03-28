// toggle for side menu open and colse // 
document.addEventListener('DOMContentLoaded', function() {

  function toggleSideMenu() {
      const sideMenu = document.getElementById('sideMenu');
      sideMenu.classList.toggle('hidden');
  }

  const closeBtn = document.getElementById('closeBtn');
  closeBtn.addEventListener('click', toggleSideMenu);

  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  mobileMenuBtn.addEventListener('click', toggleSideMenu);
});

