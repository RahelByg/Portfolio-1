var slideIndex=1;function plusDivs(e){showDivs(slideIndex+=e)}function showDivs(e){var n,t=document.getElementsByClassName("mySlides");for(e>t.length&&(slideIndex=1),e<1&&(slideIndex=t.length),n=0;n<t.length;n++)t[n].style.display="none";t[slideIndex-1].style.display="block"}function showLink1(){if(window.innerWidth<1e3){var e=document.getElementById("link1");"none"===e.style.display?e.style.display="block":e.style.display="none"}}function showLink2(){if(window.innerWidth<1e3){var e=document.getElementById("link2");"none"===e.style.display?e.style.display="block":e.style.display="none"}}function showLink3(){if(window.innerWidth<1e3){var e=document.getElementById("link3");"none"===e.style.display?e.style.display="block":e.style.display="none"}}function showLink4(){if(window.innerWidth<1e3){var e=document.getElementById("link4");"none"===e.style.display?e.style.display="block":e.style.display="none"}}function getFactAjax(){fetch("http://numbersapi.com/random/year?json").then(e=>e.json()).then(e=>document.querySelector("#year-fact").innerHTML=e.text).catch(e=>document.querySelector("#year-fact").innerHTML=e)}function getFactAjax2(){fetch("http://numbersapi.com/random/year?json").then(e=>e.json()).then(e=>document.querySelector("#random-fact").innerHTML=e.text).catch(e=>document.querySelector("#random-fact").innerHTML=e)}function getFactAjax3(){fetch("http://numbersapi.com/random/?json").then(e=>e.json()).then(e=>document.querySelector("#trivia-fact").innerHTML=e.text).catch(e=>document.querySelector("#trivia-fact").innerHTML=e)}showDivs(slideIndex),window.setInterval(function(){getFactAjax()},5e3),window.setInterval(function(){getFactAjax2()},5e3),window.setInterval(function(){getFactAjax3()},5e3);