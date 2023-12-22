window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 50 || document.body.scrollTop > 50) {
    document.getElementById("Sliding_Window").style.height = "0px";
  } else {
    document.getElementById("Sliding_Window").style.height = "100%";
  }
}