document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleButton');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeIcon = '❌'; // Your close icon
  const menuIcon = '☰'; // Your menu icon
  let showMenuBar = false;
  let expandedMenu = null;

  function toggleMenu() {
    showMenuBar = !showMenuBar;
    mobileMenu.classList.toggle('show', showMenuBar);
    expandedMenu = null; // Reset expanded menu
    updateToggleButton();
  }

  function updateToggleButton() {
    toggleButton.innerHTML = showMenuBar ? closeIcon : menuIcon;
  }

  function handleMenuClick(menu) {
    expandedMenu = expandedMenu === menu ? null : menu; // Toggle the expanded menu
    renderMobileMenu();
  }

  function renderMobileMenu() {
    mobileMenu.innerHTML = `
      <div class="mb-product-selection-div">
        <!-- Your mobile menu items here -->
        <ul class='mb-menu-list'>
          <div class="mb-menu-home-list menu-list">
            <p class="close-menu mb-menu-txt">Home</p>
          </div>
        </ul>
        <ul class='mb-menu-list'>
          <div class="mb-menu-about-list menu-list">
            <p class="close-menu mb-menu-txt">About Us</p>
          </div>
        </ul>
        <ul class='mb-menu-list'>
          <div class="mb-menu-cau-list menu-list">
            <p class="close-menu mb-menu-txt">Services</p>
          </div>
        </ul>
        <ul class='mb-menu-list'>
          <div class="mb-menu-vol-list menu-list">
            <p class="close-menu mb-menu-txt">Portfolio</p>
          </div>
        </ul>
        <ul class='mb-menu-list'>
          <div class="mb-menu-news-list menu-list">
            <p class="close-menu mb-menu-txt">Blog</p>
          </div>
        </ul>
        <ul class='mb-menu-list'>
          <div class="mb-menu-contact-list menu-list">
            <p class="close-menu mb-menu-txt">Message Us</p>
          </div>
          <div class='social-media'>
            <a class='facebook-link' href='#'><i class="fab fa-facebook-f"></i></a>
            <a class='instagram-link' href='#'><i class="fab fa-instagram"></i></a>
            <a class='whatsapp-link' href='#'><i class="fab fa-whatsapp"></i></a>
          </div>
        </ul>
        <ul class='mb-menu-list'>
          <div class="navbar-btn-cnt menu-list">
            <button class="donate-btn">Contact Now</button>
          </div>
        </ul>
      </div>
    `;
  }

  toggleButton.addEventListener('click', toggleMenu);

  // Event delegation for menu item clicks
  mobileMenu.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('close-menu')) {
      toggleMenu();
    }
    if (target.classList.contains('news-toggler')) {
      handleMenuClick('news');
    }
  });

  renderMobileMenu(); // Initial render
});