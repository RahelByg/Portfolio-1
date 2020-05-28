var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

function showLink1() {
  if (window.innerWidth < 1000) {
    var x = document.getElementById("link1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  }


  function showLink2() {
    if (window.innerWidth < 1000) {
      var x = document.getElementById("link2");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
  }

    function showLink3() {
      if (window.innerWidth < 1000) {
        var x = document.getElementById("link3");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
    }

      function showLink4() {
        if (window.innerWidth < 1000) {
          var x = document.getElementById("link4");
          if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
        }
      }

      window.setInterval(function(){
        getFactAjax()
      }, 5000);

  function getFactAjax() {
  fetch("http://numbersapi.com/random/year?json")
  .then(response => {
    return response.json();
  })
 .then(
   data =>
   (document.querySelector("#year-fact").innerHTML = data.text)
 )
  .catch(
   error =>
    (document.querySelector("#year-fact").innerHTML = error)
 );
}

window.setInterval(function(){
  getFactAjax2()
}, 5000);

function getFactAjax2() {
fetch("http://numbersapi.com/random/year?json")
.then(response => {
return response.json();
})
.then(
data =>
(document.querySelector("#random-fact").innerHTML = data.text)
)
.catch(
error =>
(document.querySelector("#random-fact").innerHTML = error)
);
}

window.setInterval(function(){
  getFactAjax3()
}, 5000);

function getFactAjax3() {
fetch("http://numbersapi.com/random/?json")
.then(response => {
return response.json();
})
.then(
data =>
(document.querySelector("#trivia-fact").innerHTML = data.text)
)
.catch(
error =>
(document.querySelector("#trivia-fact").innerHTML = error)
);
}
