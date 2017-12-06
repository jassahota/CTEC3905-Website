(function(){

  let menuButton = document.getElementById("menu");
  let navMenu = document.getElementById("nav-menu");

  menuButton.addEventListener("click", toggleMenu);

  let toggle = false; // hidden at first
  function toggleMenu(){
    if (toggle) { // true: it's visible
      navMenu.classList.remove("show-menu"), // hide it
      toggle = false
    }
    else { // false: it's hidden
      navMenu.classList.add("show-menu"), // show it
      toggle = true
    }
  }

})();


"use strict";

(function(){
  
  let queryBox = document.getElementById("footballQuery");
  let footballJSON = document.getElementById("football-news");

  let baseURL = "http://content.guardianapis.com/search?page-size=3&q=football&api-key=cbb1c233-0012-4e70-8c33-bb63d607fe35";

	addEventListener("submit", function(ev){
    let url = baseURL + queryBox.value;
    let request = new Request(url);
    fetch(request)
      .then(function (response) {
        // console.log(`response: ${response.status}`);
        return response.json();
      })
      .then(function(data) {
        // console.log(data);
        let key;
        let theData = "";
        let tmp = data.response.results;
        for (key in tmp) {
          theData += `<li><a href="${tmp[key].webUrl}">${tmp[key].webTitle}</a> ${tmp[key].webPublicationDate}</li>`;
        }
        footballJSON.innerHTML = theData;
      });
	  queryBox.value = "";
    ev.preventDefault();
  }, false);

}());


//f1
(function(){
  
  let queryBox = document.getElementById("f1Query");
  let f1JSON = document.getElementById("f1-news");

  let baseURL = "http://content.guardianapis.com/search?page-size=3&q=f1&api-key=cbb1c233-0012-4e70-8c33-bb63d607fe35";

	addEventListener("submit", function(ev){
    let url = baseURL + queryBox.value;
    let request = new Request(url);
    fetch(request)
      .then(function (response) {
        // console.log(`response: ${response.status}`);
        return response.json();
      })
      .then(function(data) {
        // console.log(data);
        let key;
        let theData = "";
        let tmp = data.response.results;
        for (key in tmp) {
          theData += `<li><a href="${tmp[key].webUrl}">${tmp[key].webTitle}</a> ${tmp[key].webPublicationDate}</li>`;
        }
        f1JSON.innerHTML = theData;
      });
	  queryBox.value = "";
    ev.preventDefault();
  }, false);

}());


//basketball
(function(){
  
  let queryBox = document.getElementById("basketballQuery");
  let basketballJSON = document.getElementById("basketball-news");

  let baseURL = "http://content.guardianapis.com/search?page-size=3&q=basketball&api-key=cbb1c233-0012-4e70-8c33-bb63d607fe35";

	addEventListener("submit", function(ev){
    let url = baseURL + queryBox.value;
    let request = new Request(url);
    fetch(request)
      .then(function (response) {
        // console.log(`response: ${response.status}`);
        return response.json();
      })
      .then(function(data) {
        // console.log(data);
        let key;
        let theData = "";
        let tmp = data.response.results;
        for (key in tmp) {
          theData += `<li><a href="${tmp[key].webUrl}">${tmp[key].webTitle}</a> ${tmp[key].webPublicationDate}</li>`;
        }
        basketballJSON.innerHTML = theData;
      });
	  queryBox.value = "";
    ev.preventDefault();
  }, false);

}());