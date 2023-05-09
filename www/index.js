pilihFilter("all");

function pilihFilter(kategori) {
  let kumpulanGambar, i;
  kumpulanGambar = document.getElementsByClassName("item");
  if (kategori == "all") {
    kategori = "";
  }

  for (i = 0; i < kumpulanGambar.length; i++) {
    kumpulanGambar[i].classList.remove("show");
    if (kumpulanGambar[i].className.includes(kategori)) {
      kumpulanGambar[i].classList.add("show");
    }
  }
}

// Add active class to the current button (highlight it)
let Buttons = document.getElementById("BTN");
let button = Buttons.getElementsByClassName("btn");
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
