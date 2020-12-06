document.getElementById("dead").innerHTML = "Kenny est mort 0 fois."
let dead = 0;

let kenny = document.getElementById('kenny');

document.getElementById('up').addEventListener('click',function() {
    let t = parseInt(kenny.style.top);
    if(t > 0){
        t = t - 10;
        kenny.style.top = t + 'px';
    }
});

document.getElementById('left').addEventListener("click",function() {
    let l = parseInt(kenny.style.left);
    if(l > 50){
        l -= 10;
        kenny.style.left = l + 'px';
    }
    else {
        kenny.style.animationName = "rotate";
        kenny.style.animationDuration = "1s";
        // kenny.style.animationFillMode = "backwards";
        kenny.addEventListener("animationend", function (){
            alert("kenny is dead !!!");
            kenny.style.left = "200px";
            kenny.style.top = "200px";
        });
        dead ++;
        document.getElementById("dead").innerHTML = "Kenny est mort " + dead + " fois."
    }
});

document.getElementById('right').addEventListener("click",function() {
    let r = parseInt(kenny.style.left);
    if(r < (500-32)){
        r = r + 10;
        kenny.style.left = r + 'px';
    }
});

document.getElementById('down').addEventListener("click",function() {
    let d = parseInt(kenny.style.top);
    if (d < 500-32){
        d = d + 10;
        kenny.style.top = d + 'px';
    }
});
