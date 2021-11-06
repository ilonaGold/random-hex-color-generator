const hex = document.querySelector(".hex");
const btn = document.querySelector(".btn");
const colorPrime = document.getElementsByClassName("color-prime");

const generateColor = () => {
    const randomColor = Math.random().toString(16).substring(2, 8);
    document.body.style.backgroundColor = "#" + randomColor;
    hex.textContent = "#" + randomColor;
    for (let i=0; i < colorPrime.length; i++) {
        colorPrime[i].style.fill = "#" + randomColor;
    }
};

btn.addEventListener("click", generateColor);

generateColor();
 