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
        