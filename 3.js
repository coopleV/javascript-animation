let canvas = document.createElement('canvas');
const W = window.innerWidth;
const H = window.innerHeight;
canvas.width = W;
canvas.height = H;
document.body.appendChild(canvas);

let ctx = canvas.getContext('2d');
let runImages3 = [];
for(let i = 1; i<=3; i++){
    let img3 = new Image();
    img3.src = "./image/3/Throw/" + i + ".png";
    runImages3.push(img3);
}

function init2(){
//3
setInterval(function(){
        ctx.drawImage(runImages3[i3++], 0.4*W+100*x3, 0.4*H, 160, 160);
        // y2+=0.045*H*k;
        x3-=0.2;
        // if(i2==5) k*=-1;
        if(i3>=3) {x3=0.4*W-60;i3=2;}//k=0

    }, 1000/50)   
}

