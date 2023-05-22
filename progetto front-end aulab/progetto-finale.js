let n_img = 3;
let corrente = 1;
function succ(){
    corrente++;
    if(corrente>n_img){
        corrente = 1;
    }
    for(let i = n_img; i > 0; i--){
        document.querySelector("#img_slider img:nth-child("+ i +" )").style.display = "none";
    }
    document.querySelector("#img_slider img:nth-child("+ corrente +")").style.display = "block";
}
function prec(){
    corrente--;
    if(corrente == 0){
        corrente = n_img;
    }
    for(let i = n_img; i > 0; i--){
        document.querySelector("#img_slider img:nth-child("+ i +" )").style.display = "none";
    }
    document.querySelector("#img_slider img:nth-child("+ corrente +")").style.display = "block";
}

let project = setInterval(done,10);
let count1 = 1;
function done(){
    count1++;
    document.querySelector("#number1").innerHTML = count1;
    if(count1==1000){
        clearInterval(project)
    }}

let menu=document.querySelector("#menu");
let div=document.querySelector("#prova");

menu.addEventListener('click',() => {
    div.classList.toggle("hidden");
    

})















