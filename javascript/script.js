//stop animations on window resize event and then restart after window has been resized

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});


//animate on scroll
const display = (e) => {
  if(pageYOffset >= 450){
      console.log("this works!")
      document.getElementById('about-animation').classList.add("scroll-animation")
      document.getElementById('about-me-desription-container').classList.add("about-me-desription-container-animation")
  }
  else if(pageYOffset < 450){
    console.log("this works!")
    document.getElementById('about-animation').classList.remove("scroll-animation")
    document.getElementById('about-me-desription-container').classList.remove("about-me-desription-container-animation")
}
}
window.onscroll = display

