let something = function(name1, name2) {
    console.log(`Hello Mr. ${name1}  nice to meet you!`);
    console.log(`Your meeting is fixed with Dr. ${name2}`)
}


something('Rahul', 'Mohit');


// For multiplication

let multi = function(num1 , num2) {
    let multiply = num1 * num2;
   console.log(`Multiplying two numbers gives you ${multiply}`);
}
multi(3 ,4);

//How to remove undefiened
 let rUndefiened = function(name = 'Enter name', courseCount = 0){
         return "Hello Mr." + name + " your total course count till now is: " + courseCount;
}

console.log(rUndefiened('Saurabh', 12));

