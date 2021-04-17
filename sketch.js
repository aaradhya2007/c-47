const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var c1,c2,c3,c4;
var track,track2;
var players,player1,player2;
var animation;
var animation2;



var bg,world,engine,database;
function preload(){
  bg=loadImage("image/bg.jpeg")
animation=loadImage("image/jake1.png","image/jake2.png","image/jake3.png","image/jake4.PNG","image/jake5.png")
animation2=loadImage("image1.png","image2.png")
}
function setup(){

  createCanvas(displayWidth,displayHeight-200)
  
  database = firebase.database();

   engine=Engine.create();
   world=engine.world;
   game = new Game();
   game.getState();
   game.start();
   

}
function draw(){
  
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    
  }

  if(gameState===2){
    game.end()
  }
}