class RainDrops{
constructor(){
    var letters="1234567890abcde%&#@"
    this. x= Math.round(random(0,1200));
     this. y=Math.round(random(-500,-50));
     this.yspeed= Math.round(random(0,20))
     var index= Math.round(random(0,18))
              this.displayString= letters.charAt(index);
              

}
display()
{
       stroke ("purple")
       textSize(random(12,20))
       text(this.displayString,this.x,this.y)
       }
 fall()
        
        {
            this.y=this.y+this.yspeed;
            if(this.y>height)
            {
                this.y=random(-200,-100)
               
            }

        }
}