window.addEventListener("scroll", function (e) {
  // Fill logic here
  var scrolled = window.pageYOffset
  const background = document.querySelector("#imgDiv")
  background.style.backgroundPositionY = - (scrolled * 2) + 'px'
});
