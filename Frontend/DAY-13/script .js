
const article = document.querySelector('article');

document.getElementById("search").addEventListener("click", () => {
    getloc();
  });
function getloc() {
    fetch('https://meme-api.herokuapp.com/gimme')
        .then(res => res.json())
        .then(data => {
            printloc(data);
        });
}

function printloc(data) {
    console.log(data.preview);
        data.preview.forEach(meme => {
            console.log(meme);
            article.innerHTML="";
            let imagediv = document.createElement('div')
            imagediv.className = "memes";
            imagediv.innerHTML = `<img src=${meme}>`
            article.append(imagediv);
        });

}