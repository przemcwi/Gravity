function loadSVG() {
    fetch("img/crypto.svg")
    .then((response) => {return response.text();})
    .then((svg) =>{
        document.getElementById("animation").innerHTML = svg;
    })
}

loadSVG();