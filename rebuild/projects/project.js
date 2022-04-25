let index;

// document.getElementById("title").innerHTML =
// "Page location is " + window.location.href;

let subdomain = window.location.href.slice(window.location.href.lastIndexOf("/")+1, window.location.href.lastIndexOf("."));
console.log(subdomain);

fetch('/rebuild/src/projects.json')
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
      document.querySelector("body").innerHTML += '<div id=""><img src="../assets/proj/' + projects.projects[i].mainimg +'"' + ' id=""></div>'+'<div id=""><p class="subtitle">' + projects.projects[i].description + '</p></div>'
    }
  }
}
