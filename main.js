let canvas = document.createElement('canvas');
const W = window.innerWidth;
const H = window.innerHeight;
canvas.width = W;
canvas.height = H;
document.body.appendChild(canvas);

let ctx = canvas.getContext('2d');

let runImages1 = [];
let runImages2 = [];
let runImages3 = [];
let runImagesw = [];
for(let i = 1; i<=13; i++){
    let img1 = new Image();
    let img2 = new Image();
    let img3 = new Image();
    let imgw=new Image();
    img3.src = "./image/3/Throw/" + i + ".png";
    runImages3.push(img3);
    img1.src = "./image/1/Run/" + i + ".png";
    runImages1.push(img1);
    img2.src = "./image/1/Jump/" + i + ".png";
    runImages2.push(img2);
    imgw.src = "./image/weapon/" + i + ".png";
    runImagesw.push(imgw);
}
function init(){
    let i1 = 11;
    let i2 = 0;
    let i3 = 7;
    let x1 = 0;
    let x2 = 0;
    let y2 = 0;
    let x3=2;
    let xw=0;
    let iw=0;
    let k=1;
    let x=0.8*W;
    let y=0.4*H;
    setInterval(function(){

        //1-odam
        ctx.clearRect(0, 0, W, H);
        ctx.drawImage(runImages1[i1++], 0.1*W+0.07*W*x1, 0.4*H, 160, 160);
        if(i1==12) i1=11;
        if(i1<=10){
          x1+=0.1;
        if(i1==5) {x1=1; i1=4;}
            if(i1==10) {i1=9;x1=1;}  
        }

        
//2-odam
        ctx.drawImage(runImages2[i2++], 0.07*W*x2, 0.138*H-y2, 160, 160);
        y2+=0.043*H*k;
        x2+=0.5;
        if(i2==6) k*=-1;
        if(i2>=13) {x2=6.4; i2=12;k=0}

//to'siq
        ctx.beginPath();
ctx.fillStyle="green";
ctx.arc(0.21*W,0.38*H,0.15*H,Math.PI,Math.PI*2);
ctx.stroke();
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.arc(0.3*W,0.38*H,0.1*H,Math.PI,Math.PI*2);
ctx.stroke();
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.arc(0.97*W,0.6*H,0.2*H,Math.PI,Math.PI*2);
ctx.stroke();
ctx.fill();
ctx.closePath();

        //3-odam
        ctx.drawImage(runImages3[--i3], 0.7*W+0.07*W*x3, 0.4*H, 160, 160);
        x3-=0.1;
        if(i3==3) i1=1;
        if(i3==0) {x3=1.2;i3=1;
            //weapon
            ctx.drawImage(runImagesw[iw++], x,y, 50, 50);
            xw+=0.7;
            x=0.8*W-0.07*W*xw; 
             if (x>=0.25*W) {iw=1;i1=7} else {xw=0.64*W/(0.07);y=0.6*H;iw=5;}    
        }
    }, 1000/10)   
}
init();

