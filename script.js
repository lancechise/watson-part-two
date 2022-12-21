
let player=prompt("Welcome to GC mini golf! What is your name? ");
let holes=prompt("Hi, " +  player  + " ! Would you like to play 3 or 6 holes today?");
let total =0;
for (let i = 1; i <= holes; i++) {
    let par=Number(prompt("how many puts for hole  " + i + " ?") );
   
    
    total += par ;
    
    console.log("par is + " + total + "." );
}



 
 

if( holes ==3 && total === 9){
    console.log ("Good Game," +  player  + "  your  par was: 0");}
  else if( holes ==3 && total <9){
      console.log ("Great Job, " +  player  + "  your  par was -3");}
         else if( holes ==3 && total >9){
        console.log ("Nice try, " +  player  + "  your  par was + " + total + ".");
      }

      if( holes ==6 && total === 18){
        console.log ("Good Game," +  player  + "  your  par was: 0");}
      else if( holes ==6 && total <18){
          console.log ("Great Job, " +  player  + "  your  par was -3");}
             else if( holes ==6 && total >18){
            console.log ("Nice try, " +  player  + "  your  par was + " + total + ".");
          }


     

        
      







   