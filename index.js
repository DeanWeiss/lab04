function hello() {
    let name = prompt("Welcome to my website, what is your name?");
    document.write("It is a pleasure to meet you "+ name);
    }   
function players() {
    let favorite = prompt("Out of the three choices availble, which player do you like best?");
    document.write("Your choice is: " + favorite);
        if ( favorite === "Chris Carter") {
            document.write("That's a great choice!");   
            }
        else if (favorite === "Randy Moss") {
            document.write("Not bad, but you could pick better.");
            }
        else if (favorite === "Tom Brady") {
            document.write("He's alright, for a quarterback.");
            } else { 
        document.write("You better pick someone else");
            }
        }
function color() {   
        let number = 1;
        console.log(number++)

        alert("I want to to know your favorite 2 colors for a football team")
        for( let i = 1 ; i <= 2; i++ ) {
            let color = prompt("Your favorite colors #" + i);
            document.write(color)
        }
    }
function name() {     
        let nameCorrect = false;
        let jerseyCorrect = false;
        let jersey;

        while( ! nameCorrect ) {
          let name = prompt("Who is the best player on this list?");
          if ( name.toLowerCase() === "chris carter" ) { 
              nameCorrect = true;
              document.write(name) 
            }
        }
        
        do {
          jersey = prompt('What is his jersey number for the MN Vikings?');
          if ( parseInt(jersey) === 80 ) { jerseyCorrect = true; }
          } while ( jerseyCorrect != true )
          document.write(jersey)
        
        }
function rating() {
    let output='';
    let rating = prompt("Scale of 1-5 how good are these players?")

    for (let i = 0; i < rating; i++) {
        output +="<img src='images/vikinghead.jpg' />";
    }

    document.write(output);
    
    

}