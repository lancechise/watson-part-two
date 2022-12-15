let player=prompt("Welcome to GC mini golf! What is your name? ");
let holes=prompt("Hi, " +  player  + " ! Would you like to play 3 or 6 holes today?");
let total= 0 ;
for(let i= 1; i <= holes; i++){
    let par=Number(prompt("how many puts for hole " + i + "?") );
    
    
    total += par ;
    
}



console.log("par is + " + total + "." );
 



if( holes ==3 && total >= 9 ){
    console.log ("Nice try," +  player  + "  your  par was + " + total + ".");}
    if( holes ==3 && total <= 6){
      console.log ("Great Job, " +  player  + "  your  par was -  " + total + ".");}
      if( holes ==3 && total < 3){
        console.log ("Good game, " +  player  + "  your  par was   " + total + ".");}

        if( holes ==6 && total >= 18 ){
          console.log ("Nice try," +  player  + "  your  par was + " + total + ".");}
          if( holes ==6 && total >= 12){
            console.log ("Great Job, " +  player  + "  your  par was -  " + total + ".");}
            if( holes ==6 && total <= 6){
              console.log ("Good game, " +  player  +  "  your  par was + " + total + ".");}
      





//if( holes ==3)
 // if(total > 9 ) {
   // console.log("Nice try," +  player  + "  your  par was + " + total + " ");}

    /* if( holes ==3)
       if(total <= 6 ) {
      console.log("Great Job," +  player  + "  your  par was -  " + total + " ");}

      if( holes ==3)
       if (total <= 3 ) {
      console.log("Good game," +  player  + "  your  par was -  " + total + " ");}
    

      if( holes ==6)
       if(total > 18 ) {
      console.log("Nice try," +  player  + "  your  par was + " + total + " ");}

    if( holes ==6)
      if (total <= 12 ) {
      console.log("Great Job," +  player  + "  your  par was -  " + total + " ");}

      if( holes ==6)
        if (total <= 6 ) {
      console.log("Good game," +  player  + "  your  par was -  " + total + " ");}
    
     */


   