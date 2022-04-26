let index;
let slideIndex = 1;

// document.getElementById("title").innerHTML =
// "Page location is " + window.location.href;

let subdomain = window.location.href.slice(window.location.href.lastIndexOf("/")+1, window.location.href.lastIndexOf("."));
console.log(subdomain);

fetch('../src/projects.json')
       .then(function (response) {
           return response.json();
       })
       .then(projects =>{
         console.log(projects);
         // parseData(projects);
         findSubdomain(projects);
       })
       .catch(function (err) {
           console.log('error: ' + err);
       });

function findSubdomain(projects){
  for(i=0; i<projects.projects.length; i++){
    if(projects.projects[i].subdomain == subdomain){
      index=i;
      console.log(projects.projects[i]);
      document.getElementById("title").innerHTML = projects.projects[i].name;
      populatePage(projects.projects[i]);
    }
  }
}

function populatePage(project){
  console.log(project);
  for(i=0;i<((project.images.length)+1);i++){
    if(i==0){
      document.getElementById("slideshow").innerHTML += '<div class="slide"><img src="../assets/proj/' + project.mainimg +'" id="" alt=""></div>';
    }else{
      document.getElementById("slideshow").innerHTML += '<div class="slide"><img src="../assets/proj/' + project.images[i-1] + '" id="" alt=""></div>';
    }
  }
  document.getElementById("slideshow").innerHTML +=   '<a class="prev" onclick="plusSlides(-1)">&#10094;</a><a class="next" onclick="plusSlides(1)">&#10095;</a>';
  document.querySelector("body").innerHTML += '<div id=""><p class="subtitle">' + project.description + '</p></div>';
  showSlides(slideIndex);
}




// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  // let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}
