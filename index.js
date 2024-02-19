// Hamburger Menu Function 
function toggleMobileNavbar() {
  var mobileNavbar = document.getElementById('mobileNavbar');
  // Toggle the display property of the mobile navbar
  if (mobileNavbar.style.display === 'none') {
    mobileNavbar.style.display = 'block';
  } else {
    mobileNavbar.style.display = 'none';
  }
}
