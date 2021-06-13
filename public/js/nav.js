const navLinks = document.querySelectorAll("header section.navigation a")

navLinks.forEach(i => {
    i.addEventListener("click", () => {
        
    })
})

jQuery(function ($) {
    var path = window.location.href;
    $("header section.navigation a").each(function () {
      if (this.href === path) {
        $(this).addClass("active");
      }
    });
  });