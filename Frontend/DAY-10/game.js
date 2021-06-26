let words = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];
  
  words = [...words, ...words];
  let moves = 50;
  let matches = 0;
  let gameActive = true;
  
  for (let i = 1; i <= 16; i++) {
    let card = document.createElement("div");
    card.classList.add("flip-card");
  
    let inner = document.createElement("div");
    inner.classList.add("flip-inner");
  
    let front = document.createElement("div");
    front.classList.add("front");
  
    let back = document.createElement("div");
    let rand = Math.floor(Math.random() * (16 - i));
    back.innerHTML = "<h2>" + words[rand] + "</h2>";
  
    words.splice(rand, 1);
  
    back.classList.add("back");
    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);
    document.getElementById("grid").appendChild(card);
  }
  
  let click;
  let btns = document.getElementsByClassName("flip-card");
  
  for (let i = 0; i < 16; i++) {
    btns[i].addEventListener("click", (e) => {
      if (!gameActive) return;
      moves--;
      document.querySelector("span").innerHTML = moves;
      if (click) {
        btns[i].firstChild.classList.add("flipped");
        gameActive = false;
        setTimeout(() => {
          if (
            !(
              btns[i].firstChild.lastChild.innerHTML ===
              click.firstChild.lastChild.innerHTML
            )
          ) {
            btns[i].firstChild.classList.remove("flipped");
            click.firstChild.classList.remove("flipped");
          } else {
            matches++;
            btns[i].classList.add("visi");
            click.classList.add("visi");
            let cloneBtn = btns[i].cloneNode(true);
            btns[i].parentNode.replaceChild(cloneBtn, btns[i]);
            let cloneClick = click.cloneNode(true);
            click.parentNode.replaceChild(cloneClick, click);
          }
          click = undefined;
          gameActive = true;
        }, 500);
      } else {
        click = btns[i];
        btns[i].firstChild.classList.add("flipped");
      }
    });
  }
  
  setInterval(() => {
    if (moves === 0) {
      alert("You lose");
      moves--;
      location.reload();
    }
    if (matches === 8) {
      alert("You Won");
      matches++;
      location.reload();
    }
  }, 100);