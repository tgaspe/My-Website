var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

c.width = innerWidth;
c.height = innerHeight;



class Lhama {
    constructor(x, y, height, width) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }

    draw() {
        ctx.beginPath();
        //ctx.rect(this.x, this.y, this.height, this.width);
        ctx.fillRect(255, 160, 71, 100);
        ctx.rect(this.x + -31, this.y + -1, 7, 43, 8);
        ctx.rect(this.x + 17, this.y + -1, 7, 43, 8);
        ctx.rect(this.x + -22, this.y + -4, 7, 43, 8);
        ctx.rect(this.x + 26, this.y + -4, 7, 43, 8);
        //ctx.ellipse(this.x, this.y, this.width, this.height);
        //Neck
        ctx.rect(this.x + 15, this.y + -55, 20, 56, 8);
        //ellipse(this.x + 36, this.y +-48, 39,14);
        //ctx.triangle(this.x +26, this.y + -51, this.x +28, this.y + -70, this.x +15, this.y + -51);
        //ctx.triangle(this.x +29, this.y + -48, this.x +34, this.y + -69, this.x +18, this.y + -48);
        //ctx.triangle(this.x +51, this.y + -48, this.x +25, this.y + -59, this.x +26, this.y + -32);
        //Tail
        ctx.stroke();

        
        //ctx.noStroke();
        
        
        
        ctx.ellipse(this.x + -39, this.y + -8, 18, 16);
        //Nose
        ctx.rect(this.x + 33, this.y + -51, 18, 9, 14);
        //Eye
        //ctx.fill(10, 9, 9);
        ctx.ellipse(this.x + 34, this.y + -52, 6, 6);
        ctx.stroke();
    }
}

var lhama = new Lhama(400, 100, 50, 50);
lhama.draw();
/*
var currentScene;
var cloudX = 400;
var cloudSpeed = 1;
var grassX = [];
var grassSpeed = 1;
for (var i = 0; i < 25; i++) { grassX.push(i*20);}
var obstacles = [];




//OBJECT TYPES //////////////////////////////////////////////////////

//Stopwatch Object Type

var Stopwatch = function () {
    
    var time = 0;
    var interval;
    var offset;
    
    function update() {}
    function delta() {
        var now = Date.now();
        var timePassed = now - offset;
        return timePassed;
    }
    function timeFormat() {}
    
    
    this.IsOn = false;
    this.start = function(){
        if (!this.IsOn) {
            //interval = setInterval(update, 10);
        }
    
    };
    this.stop = function (){};
    this.reset = function () {};



};

//Lhama Object Type
var Lhama = function (x, y, width, height) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 73;
    this.height = height || 33;
};

//Obstacle Object Type
var Obstacle = function (x, y, width, height) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 20;
    this.height = height || 65;
};

for (var i = 0; i < 7; i++) { obstacles.push(new Obstacle(random(4,5)*45*random(3,5)*random(3,5) , 286) );}

//FUNCTIONS ////////////////////////////////////////////////////////
//Button
var drawButton = function (ButtonName, positionX, positionY) {
    fill(255, 0, 0);
    rect(positionX, positionY,140,40,5);
    fill(5, 5, 5);
    textSize(22);
    text(ButtonName, positionX + 35, positionY + 30);

};

//TALKING
var talking = function(message, size) {
    fill(252, 249, 249);
    triangle(98,247,114,223,155,226);
    ellipse(166,200, 143,62);
    fill(0, 0, 0);
    textSize(size);
    text(message, 103,183,112,44);
    
};

//OBSTACLE METHODS
Obstacle.prototype.draw = function() {
     fill(117, 34, 9);
     rect(this.x, this.y, this.width, this.height);
};


//LHAMA METHODS
Lhama.prototype.draw = function() {
    
    this.y = constrain( this.y, 0, 310);
    
    fill(255, 160, 71);
    noStroke();
    rect(this.x + -31, this.y + -1, 7, 43, 8);
    rect(this.x + 17, this.y + -1, 7, 43, 8);
    rect(this.x + -22, this.y + -4, 7, 43, 8);
    rect(this.x + 26, this.y + -4, 7, 43, 8);
    ellipse(this.x, this.y, this.width, this.height);
    //Neck
    rect(this.x + 15, this.y + -55, 20, 56, 8);
    //ellipse(this.x + 36, this.y +-48, 39,14);
    triangle(this.x +26, this.y + -51, this.x +28, this.y + -70, this.x +15, this.y + -51);
    triangle(this.x +29, this.y + -48, this.x +34, this.y + -69, this.x +18, this.y + -48);
    triangle(this.x +51, this.y + -48, this.x +25, this.y + -59, this.x +26, this.y + -32);
    //Tail
    ellipse(this.x + -39, this.y + -8, 18, 16);
    //Nose
    rect(this.x + 33, this.y + -51, 18, 9, 14);
    //Eye
    fill(10, 9, 9);
    ellipse(this.x + 34, this.y + -52, 6, 6);
    
};

Lhama.prototype.jump = function () {this.y = 200;};
Lhama.prototype.fall = function () {this.y = this.y + 7;};  

Lhama.prototype.checkColision = function () {
    
};


////////////////////////////////////////////////////////////////

var lhama = new Lhama(53,310);
var lhama1 = new Lhama(197,328);


//SCENE 1
var drawScene1 = function () {
    currentScene = 1;
    background(0, 255, 217);
    //TITLE
    textSize(45);
    fill(8, 6, 0);
    text("LHAMAS",105,115,195,138);
    fill(10, 125, 17);
    rect(0, 350, 400, 50);
    //lhama
    
    drawButton("START", 130, 200);
    lhama1.draw();
};




//SCENE 5
var drawScene5 = function () {
    currentScene = 5;
    background(43, 237, 198);
    fill(10, 125, 17);
    rect(0, 350, 400, 50);
    textSize(38);
    fill(252, 5, 5);
    text("GAME OVER!",74,200);
    drawButton("NEXT", 255,5);
    
    
};
//SCENE 2
var drawScene2 = function () {
    
    //SCENARIO
    currentScene = 2;
    background(70, 158, 252);
    
    //CLOUDS
    fill(225, 250, 246);
    
    ellipse(cloudX-cloudSpeed,109,150,30);
    ellipse(cloudX-cloudSpeed+ 32,85,129,35);
    ellipse(cloudX-cloudSpeed+ 62,104,132,30);

    
    //BUTTON
    drawButton("NEXT", 255,5);
    //CLOUD ANIMATION
    cloudX = cloudX -cloudSpeed;
    
    if (cloudX === -135) { cloudX = width;} 
    
    talking(" WAZAAA!!!\nThe time has come for you to ride that Lhama!!!", 10);
    
    //GRASS ANIMATION
    for (var i = 0; i < grassX.length; i++) {
    image(getImage("cute/GrassBlock"),grassX[i],297);
    grassX[i] = grassX[i] - grassSpeed;
    if (grassX[i] < -40) { grassX[i]= width;}
}

// BODY
    var x = cos(millis()*0.3);
    var y = sin(millis()*0.1); 
    strokeWeight(3);
    //Head
    fill(250, 247, 247);
    ellipse(79,241,32,32);
    //Arms
    line(79+x*0.1, 269, 79 +13*y, 298  );
    line(79+x*0.1, 269, 79 -13*y, 298);
    //Torso
    line(79, 261, x*0.1+79, x+304);
    //Legs
    line(79+x, 304, 79 + 17*x, 348);
    line(79+x, 304, 79 - 17*x , 348);
    
    //LOWER GRASS
    fill(68, 181, 27);
    rect(0, 351, 400, 50);
    

};


//SCENE 3
var drawScene3 = function () {
    currentScene = 3;
    var x = cos(millis()*1);
    var y = 0;
    
    background(26, 0, 255);
    fill(10, 125, 17);
    rect(0, 350, 400, 50);
    drawButton("NEXT", 255,5);
    // BODY
    strokeWeight(3);
    //HEAD
    fill(250, 247, 247);
    ellipse(79,236,32,32);
    //ARMS
    line(79, 269, 118, 247);
    line(79, 269, 35, 247);
    //TORSO
    line(79, 254, x+79, x+304);
    //LEGS
    line(x+105, x*20+322, 79, 304);
    line(x+79, x*2+304, 56, 323);
    //CANELAS
    //right
    line(x+105, x*20+322, 122, 349);
    //left
    line(y+56,y*20+324,32, 294); 
};




//SCENE 4
var drawScene4 = function () {
    currentScene = 4;
    grassSpeed = 2;
    
    background(40, 181, 157);
    
    //GRASS ANIMATION
    for (var i = 0; i < grassX.length; i++) {
    image(getImage("cute/GrassBlock"),grassX[i],297);
    grassX[i] = grassX[i] - grassSpeed;
    if (grassX[i] < -40) { grassX[i]= width;}
}
    //Button
    fill(10, 125, 17);
    rect(0, 350, 400, 50);
    drawButton("NEXT", 255,5);
    
    //obstacle
    for (var i = 0; i < obstacles.length; i++) {
        obstacles[i].draw();
        obstacles[i].x -= 4;
        if (obstacles[i].x < -20) { obstacles[i].x = 1000;}
        if (obstacles[i].x <= lhama.x && obstacles[i].y <= lhama.y) {drawScene5();}
    }
    
    
    
    
   
    
    if (keyIsPressed) {
        if (key.code === 32) {lhama.jump();}
        } else { lhama.fall();}
     
     lhama.draw();
    
   
     
     
};











mouseClicked = function (){
    if (currentScene === 1 && mouseX > 130 && mouseX < 270 && mouseY > 200 && mouseY < 240
    ) {
        drawScene2();
    } else if (currentScene === 2 && mouseX > 255 && mouseX < 395 && mouseY > 5 && mouseY < 45) {
        drawScene3();
    } else if (currentScene === 3 && mouseX > 255 && mouseX < 395 && mouseY > 5 && mouseY < 45) {
        drawScene4();
    } else if (currentScene === 4 && mouseX > 255 && mouseX < 395 && mouseY > 5 && mouseY < 45) {
        drawScene5();
    } else if (currentScene === 5 && mouseX > 255 && mouseX < 395 && mouseY > 5 && mouseY < 45) {
        drawScene1();
    }
    
};


draw = function() {
     if (currentScene === 2) {drawScene2();}
     if (currentScene === 3) {}
     if (currentScene === 4) {drawScene4();}
     if (currentScene === 5) {}
     


};



// -------- Main ----------
drawScene1();



//obstacles[0].draw();

*/
