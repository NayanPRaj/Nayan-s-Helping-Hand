function spawnFruits(){
   boy.visible=false;
//bg.visible=false; 

background("lightblue"); 

if(World.frameCount%80===0){
    var fruit=createSprite(500,500,10,10);
    position = Math.round(random(1,2));

    if(position==1)
    {
    fruit.x=400;
    fruit.velocityX=-(7);
    }
    else
    {
      if(position==2){
      fruit.x=0;
      fruit.velocityX=(7);
    }
  }

  r=Math.round(random(1,3));
  if (r == 1) {
    fruit.addImage(fruit1);
  } else if (r == 2) {
    fruit.addImage(fruit2);
  } else if (r == 3) {
    fruit.addImage(fruit3);
  }


  fruit.y=Math.round(random(50,340));
   
    
    fruit.setLifetime=100;
    
    fruitGroup.add(fruit);

  

}
drawSprites();
}