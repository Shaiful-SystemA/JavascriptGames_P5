/**
 * Created by Lenovo on 12/3/2016.
 */


var grid;
var next;

var dA=1;
var dB = 0.5;
var feed =  0.05;
var k = 0.062;


function setup(){
    createCanvas(200,200);
    pixelDensity(1);
    grid=[];
    next = [];
    for(var x=0; x <width;x++){
        grid[x]= [];
        next[x]= [];

        for(var y=0;y<height;y++){
            grid[x][y] = {a: 1, b: 1};
            next[x][y] = {a: 1, b:0};
        }
    }

    for(var i =100; i<110; i++){
        for(var j =100; j<110; j++) {
            grid[i][j].b=1;
            }
        }
   // grid[100][100].a=1;
}

function draw(){
    background(51);

    for(var x = 1; x <width-1;x++){
        for(var y=1;y<height-1;y++){
            var a = grid[x][y].a;
            var b = grid[x][y].b;
            next[x][y].a = a+
                        (dA + laplaceA(x,y))-
                        (a * b *b ) +
                        (feed * (1-a));
            next[x][y].b = b+
                (dB + laplaceB(x,y))-
                (a * b *b ) -
                ((k + feed) * b);

        }
    }

    loadPixels();
    for(var x=0; x <width;x++){
        for(var y=0;y<height;y++){
         //   var c = color(255,0,100);
            var pix = (x+y*(width))*4;

            pixels[pix+0] = floor(grid[x][y].a*255);
            pixels[pix+1] = 0;
            pixels[pix+2] = floor(grid[x][y].a*255);
            pixels[pix+3] = 255;
        }
    }
    updatePixels();

    swap();


}

function laplaceA(x,y){

    var SumA = 0;

    SumA += grid[x][y].a * -1;

    SumA += grid[x-1][y].a * 0.2;

    SumA += grid[x+1][y].a * 0.2;

    SumA += grid[x][y+1].a * 0.2;

    SumA += grid[x][y-1].a * 0.2;

    SumA += grid[x-1][y-1].a * 0.05;

    SumA += grid[x+1][y-1].a * 0.05;

    SumA += grid[x +1][y+1].a * 0.05;

    SumA += grid[x -1][y+1].a * 0.05;


    return SumA;
}

function laplaceB(x,y){

    var SumB = 0;

    SumB += grid[x][y].b * -1;

    SumB += grid[x-1][y].b * 0.2;

    SumB += grid[x+1][y].b * 0.2;

    SumB += grid[x][y+1].b * 0.2;

    SumB += grid[x][y-1].b * 0.2;

    SumB += grid[x-1][y-1].b * 0.05;

    SumB += grid[x+1][y-1].b * 0.05;

    SumB += grid[x +1][y+1].b * 0.05;

    SumB += grid[x -1][y+1].b * 0.05;

    return SumB;
}

function swap(){

    var temp = grid;
    grid = next;
    next = temp;
}














