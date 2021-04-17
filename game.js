class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
     
        
    player1=Bodies.rectangle(100,100,50,50)
    World.add(world,player1)
     
    
    player2=Bodies.rectangle(200,100,50,50)
    World.add(world,player2)
     
 players=[player1,player2]
     

    }
  
    play(){
      form.hide();
  
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        //var display_position = 100;
        background(bg)
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 200;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          players[index-1].position.x = x;
          players[index-1].position.y = y;
  
          if (index === player.index){
          
          
            camera.position.x = displayWidth/2;
            camera.position.y = players[index-1].position.y
  
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
      if(player.distance>3800){
        gameState=2
      }
      var pos=player1.position;
      imageMode(CENTER)
      image(animation,pos.x,pos.y,100,100)

      var pos1=player2.position;
      imageMode(CENTER)
      image(animation2,pos1.x,pos1.y,100,100)
  
    }
    end(){
      console.log("game Ended")
    }
  }