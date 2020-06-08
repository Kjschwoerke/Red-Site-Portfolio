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
  if(pageYOffset >= 500 && pageYOffset<=600){
      console.log("this works!")
      document.getElementById('about-animation').classList.add("scroll-animation")
  }
  else if(pageYOffset < 500){
    console.log("this works!")
    document.getElementById('about-animation').classList.remove("scroll-animation")
}
}
window.onscroll = display

// function offset(el) {
//   var rect = el.getBoundingClientRect(),
//   scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//   scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
// }

// // example use
// var div = document.getElementById('about-animation');
// var divOffset = offset(div);
// console.log(divOffset.left, divOffset.top);