
var check = document.getElementById("check");
var check2 = document.getElementById("check2");

check.addEventListener("change", function() {
  
  var main = document.getElementsByClassName("main")[0];
  main.classList.add("active");
  var titlea = document.getElementById("titlea");
  titlea.classList.add("active1");
  
  var card = document.getElementById("card-body");
  card.classList.add("card text-bg-secondary mb-3");
});
check2.addEventListener("change", function() {
    var main = document.getElementsByClassName("main")[0];
    main.classList.remove("active");

    var titlea = document.getElementById("titlea");
    titlea.classList.remove("active1");
  
    var card = document.getElementById("card-body");
    card.classList.remove("card text-bg-secondary mb-3");
});

