function gotohreno() {
    // Change the current page location
window.location.href = "aboutus.html";

  document.addEventListener("DOMContentLoaded",function() {
    var targetDiv = document.querySelector("#homeren");
    console.log(targetDiv);
    if (targetDiv) {
    window.scrollTo({
    top: targetDiv.offsetTop,
    behavior: "smooth"
    });
    }
    })();
}
  function gotocreno() {
    // Change the current page location
window.location.href = "aboutus.html";

// Scroll to a specific div on the new page
document.addEventListener("DOMContentLoaded", function() {
var targetDiv = document.querySelector("#commreno");
window.scrollTo({
top: targetDiv.offsetTop,
behavior: "smooth"
});
});
  }
  function gotofloor() {
    // Change the current page location
window.location.href = "aboutus.html";

// Scroll to a specific div on the new page
document.addEventListener("DOMContentLoaded", function() {
var targetDiv = document.querySelector("#floorserv");
window.scrollTo({
top: targetDiv.offsetTop,
behavior: "smooth"
});
});
  }
