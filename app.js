// Back To To JS
window.addEventListener("scroll", function(){
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 500)
  })
  
    function scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior:'smooth'
    })
  }
  
  
  // Navigation JS
  
  function openNav() {
    document.getElementById("navigation").style.left = "0%";
  }
  
  function closeNav() {
    document.getElementById("navigation").style.left = "-100%";
  }