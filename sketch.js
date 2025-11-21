let sno1, sno2, sno3;
let E1, E2, E3, E4, E5, E6, E7, E8, E9;
let buttons2, empty, presents, tophat;
let blueScarf, redScarf, buttons;
let rightTop, rightMid, rightBot;
let rightarrSmall, rightarrBig;
let currentRightArr;
let leftTop, leftMid, leftBot;
let leftarrSmall, leftarrBig;
let currentLeftArr;
let leftScale = [1, 1, 1];
let rightScale = [1, 1, 1];
let sub1;
let pos1 = 4;
let pos2 = 0;
let sub2 = [];
let pos3 = 0;       
let sub3 = [];  


function preload(){
    sub1 = [E1, E2, E3, E4, E5, E6, E7, E8, E9];
    sno1 = loadImage("assets/sno1.png");
    sno2 = loadImage("assets/sno2.png");
    sno3 = loadImage("assets/sno3.png");

    leftarrSmall = loadImage("assets/leftarr.png");
    leftarrBig   = loadImage("assets/leftarr.png");

    rightarrSmall = loadImage("assets/rightarr.png");
    rightarrBig = loadImage("assets/rightarr.png");

    font = loadFont("assets/HennyPenny-Regular.ttf");

    E1 = loadImage("assets/Expressions/E1.png");
    E2 = loadImage("assets/Expressions/E2.png");
    E3 = loadImage("assets/Expressions/E3.png");
    E4 = loadImage("assets/Expressions/E4.png");
    E5 = loadImage("assets/Expressions/E5.png");
    E6 = loadImage("assets/Expressions/E6.png");
    E7 = loadImage("assets/Expressions/E7.png");
    E8 = loadImage("assets/Expressions/E8.png");
    E9 = loadImage("assets/Expressions/E9.png");

    blueScarf = loadImage("assets/Torso/blue.png");
    redScarf = loadImage("assets/Torso/red.png");
    buttons = loadImage("assets/Torso/buttons.png");
    sub2 = [blueScarf, redScarf, buttons];

    buttons2 = loadImage("assets/Accessories/buttons2.png");
    presents = loadImage("assets/Accessories/presents.png");
    tophat = loadImage("assets/Accessories/top hat.png");
    sub3 = [buttons2, empty, presents, tophat];

}
function setup(){
    createCanvas(420, 594);
    background(94,68,35);
    backdrop();


    // LEFT ARROWS
    leftarrSmall.resize(70, 90);
    leftarrBig.resize(75, 95);

    leftTop = leftarrSmall;
    leftMid = leftarrSmall;
    leftBot = leftarrSmall;
    currentLeftArr = leftarrSmall;
    // RIGHT ARROWS
    rightTop = rightarrSmall;
    rightMid = rightarrSmall;
    rightBot = rightarrSmall;

    // resize
    rightarrSmall.resize(70, 90);
    rightarrBig.resize(75, 95);

    currentRightArr = rightarrSmall;
}

function draw(){
    let bob = sin(frameCount * 0.02) * 4;
    background(94,68,35);  // clear screen
    backdrop();

    buttonSize();               // update buttonsss
    arrows();                   // draw all arrows
    // TORSO
    for (i in sub2){
        if(pos2 === 0){ image(sno2, 0, 15); image(blueScarf, 100, 194); }
        if(pos2 === 1){ image(sno2, 0, 15); image(redScarf, 120, 185); }
        if(pos2 === 2){ image(sno2, 0, 15); image(buttons, 170, 230); }
    }
    // HEAD AND EXPRESSIONS
    for (i in sub1){
        if(pos1 === 0){ image(sno1, 0, 15 + bob); image(E1, 0, 10 + bob); }
        if(pos1 === 1){ image(sno1, 0, 15 + bob); image(E2, 0, 25 + bob); }
        if(pos1 === 2){ image(sno1, 0, 15 + bob); image(E3, 0, 10 + bob); }
        if(pos1 === 3){ image(sno1, 0, 15 + bob); image(E4, 0, 10 + bob); }
        if(pos1 === 4){ image(sno1, 0, 15 + bob); image(E5, 0, 10 + bob); }
        if(pos1 === 5){ image(sno1, 0, 15 + bob); image(E6, 0, 10 + bob); }
        if(pos1 === 6){ image(sno1, 0, 15 + bob); image(E7, 0, 10 + bob); }
        if(pos1 === 7){ image(sno1, 0, 15 + bob); image(E8, 5, 10 + bob); }
        if(pos1 === 8){ image(sno1, 0, 15 + bob); image(E9, 0, 10 + bob); }
    }
    // ACCESSORIES
    if (pos3 === 0) {image(buttons2, 190, 400);}
    if (pos3 === 1){}
    if (pos3 === 2) {image(presents, 40, 458);}
    if (pos3 === 3) {image(tophat, 220, 15 + bob);}

}

// function to make dashed linesss
function setLineDash(list) {
  drawingContext.setLineDash(list);
}

// background stuff
function backdrop(){
    fill(255, 90, 90);
    strokeWeight(4);
    rect(20, 20, width - 40, height - 40);
    image(sno3, 0, 15);
    setLineDash([9, 8]);
    line(20, 370, 400, 370)
    image(sno2, 0, 15);
    line(20, 210, 400, 210)

    fill(147,196,125);
    setLineDash([9, 8]);
    rect(15, 0, width - 30, 50);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(24);
    textFont(font);
    text("Customise Your Snowman!", width / 2, 20);
}


// register arrows being clicked
function mouseClicked() {

    // --- RIGHT TOP ARROW ONLY ---
    if (hit(mouseX, mouseY, rightHitbox[0])) {
        if (pos1 < 8) pos1++;
        return;
    }

    // --- LEFT TOP ARROW ONLY ---
    if (hit(mouseX, mouseY, leftHitbox[0])) {
        if (pos1 > 0) pos1--;
        return;
    }

    // --- RIGHT MIDDLE ARROW = TORSO +1 ---
    if (hit(mouseX, mouseY, rightHitbox[1])) {
        pos2++;
        if (pos2 >= sub2.length) pos2 = 0;
        return;
    }

    // --- LEFT MIDDLE ARROW = TORSO -1 ---
    if (hit(mouseX, mouseY, leftHitbox[1])) {
        pos2--;
        if (pos2 < 0) pos2 = sub2.length - 1;
        return;
    }
    // --- RIGHT BOTTOM ARROW = ACCESSORY +1 ---
    if (hit(mouseX, mouseY, rightHitbox[2])) {
        pos3++;
        if (pos3 >= sub3.length) pos3 = 0;
        return;
    }

    // --- LEFT BOTTOM ARROW = ACCESSORY -1 ---
    if (hit(mouseX, mouseY, leftHitbox[2])) {
        pos3--;
        if (pos3 < 0) pos3 = sub3.length - 1;
        return;
    }


}

// HITBOXES
let leftHitbox = [
    // top
    { x1: 22,  y1: 93,  w: 70, h: 90 },
    // middle
    { x1: 22,  y1: 250, w: 70, h: 90 },
    // bottom
    { x1: 22,  y1: 430, w: 70, h: 90 }
];


let rightHitbox = [
    // top
    { x1: 327, y1: 93,  w: 70, h: 90 },
    // middle
    { x1: 327, y1: 250, w: 70, h: 90 },
    // bottom
    { x1: 327, y1: 430, w: 70, h: 90 }
];

function hit(mx, my, box) {
    return (mx >= box.x1 &&
            mx <= box.x1 + box.w &&
            my >= box.y1 &&
            my <= box.y1 + box.h);
}

function buttonSize() {

    // TARGET SCALES
    let leftTarget = [1, 1, 1];
    let rightTarget = [1, 1, 1];

    // RIGHT ARROWS HOVER
    if (hit(mouseX, mouseY, rightHitbox[0])) rightTarget[0] = 1.1;
    if (hit(mouseX, mouseY, rightHitbox[1])) rightTarget[1] = 1.1;
    if (hit(mouseX, mouseY, rightHitbox[2])) rightTarget[2] = 1.1;

    // LEFT ARROWS HOVER
    if (hit(mouseX, mouseY, leftHitbox[0])) leftTarget[0] = 1.1;
    if (hit(mouseX, mouseY, leftHitbox[1])) leftTarget[1] = 1.1;
    if (hit(mouseX, mouseY, leftHitbox[2])) leftTarget[2] = 1.1;

    // EASING (smooth animation)
    for (let i = 0; i < 3; i++) {
        leftScale[i] += (leftTarget[i] - leftScale[i]) * 0.2;
        rightScale[i] += (rightTarget[i] - rightScale[i]) * 0.2;
    }
}



function arrows() {

    // LEFT
    push();
    translate(22 + 35, 93 + 45);
    scale(leftScale[0]);
    image(leftarrSmall, -35, -45);
    pop();

    push();
    translate(22 + 35, 250 + 45);
    scale(leftScale[1]);
    image(leftarrSmall, -35, -45);
    pop();

    push();
    translate(22 + 35, 430 + 45);
    scale(leftScale[2]);
    image(leftarrSmall, -35, -45);
    pop();


    // RIGHT
    push();
    translate(327 + 35, 93 + 45);
    scale(rightScale[0]);
    image(rightarrSmall, -35, -45);
    pop();

    push();
    translate(327 + 35, 250 + 45);
    scale(rightScale[1]);
    image(rightarrSmall, -35, -45);
    pop();

    push();
    translate(327 + 35, 430 + 45);
    scale(rightScale[2]);
    image(rightarrSmall, -35, -45);
    pop();
}

