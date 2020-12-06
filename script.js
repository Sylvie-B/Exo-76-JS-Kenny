

document.getElementById('up').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.top);
    console.log(t);
    if(t > 0){
        t = t - 10;
        document.getElementById('kenny').style.top = t + 'px';
    }
});

document.getElementById('left').addEventListener("click",function() {
    let l = parseInt(document.getElementById('kenny').style.left);
    console.log(l);
    if(l > 0){
        l = l - 10;
        document.getElementById('kenny').style.left = l + 'px';
    }
});

document.getElementById('right').addEventListener("click",function() {
    let r = parseInt(document.getElementById('kenny').style.left);
    console.log(r);
    if(r < (500-32)){
        r = r + 10;
        document.getElementById('kenny').style.left = r + 'px';
    }
});

document.getElementById('down').addEventListener("click",function() {
    let d = parseInt(document.getElementById('kenny').style.top);
    console.log(d);
    if (d < 500-32){
        d = d + 10;
        document.getElementById('kenny').style.top = d + 'px';
    }
});

