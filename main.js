//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

function Dogstring(dog_string,dog_names){
    for (let d of dog_names ){
        let res=dog_string.toLowerCase().includes(d.toLowerCase());
        if (res== true){
            console.log("Matched dogname")}
            else {
                console.log("No match")
            }
    }
};

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","has","purple","Dog"]
Dogstring(dog_string,dog_names)


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]


function even(arr){
    for (let i = 0; i< arr.length; i++){ 
    if (i % 2 == 0){
    arr.splice(i,1,"even index");
    console.log(arr);
    }
    }
  
    }
    const arr=["Max","baseball","Rebo0t","Goku","Trucks","Rodger"];
    even(arr);

