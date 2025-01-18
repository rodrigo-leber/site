function myFunction() {
    var x = document.getElementById("meu-menu");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }