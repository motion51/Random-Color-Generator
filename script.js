const btn = document.getElementById("btn");

btn.addEventListener("click",getColor);

function getColor(){
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    // console.log(randomNumber);
    // console.log(randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color_code").textContent = randomCode;

}

getColor();