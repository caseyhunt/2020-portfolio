console.log("hello");


fetch('/rebuild/src/projects.json')
       .then(function (response) {
           return response.json();
       })
       .then(projects =>{
         console.log(projects);
         parseData(projects);
       })
       .catch(function (err) {
           console.log('error: ' + err);
       });

function parseData(projects){
  for(i=0; i<projects.projects.length; i++){
    console.log(projects.projects[i]);
    document.getElementById("grid").innerHTML += '<div class="row project" id="' + projects.projects[i].subdomain + '"><div id=""><img src="assets/proj/' + projects.projects[i].mainimg +'"' + ' id="headshot"></div>'+'<div id=""><h2>' +projects.projects[i].name + '</h2><p class="subtitle">' + projects.projects[i].subtitle + '</p></p>' + projects.projects[i].abstract + '</p></div></div>';
    //document.getElementById("grid").innerHTML += '<div id=""><h2>' +projects.projects[i].name + '</h2><p class="subtitle">' + projects.projects[i].subtitle + '</p></p>' + projects.projects[i].abstract + '</p></div></div>';
    console.log( projects.projects[i].subdomain);
    eventListeners();
  }
}

function eventListeners(){
    for(i=0; i<document.getElementsByClassName("project").length; i++){
      let projid = document.getElementsByClassName("project")[i].id;
      document.getElementsByClassName("project")[i].addEventListener("click", function(){projClick(projid)});
    }
}

function projClick(subdomain){
  console.log('project clicked ' + subdomain);
  window.location.href = '/rebuild/projects/' + subdomain + '.html';
}
