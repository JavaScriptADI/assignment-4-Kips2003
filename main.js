
// #1

for(let i = 1; i <= 10; i++){
    console.log(i);
}

console.log();
// #2

for(let i = 10; i > 0; i--){
    console.log(i);
}

console.log();
// #3

// let sum = 0;    this is sum variable where number will be stored
//     for (let i = 1; i <= 50; i++) { this is for loop iteration where it starts from 1 and ends with 50, it appends with 1 number
//         sum += i;  here is where the sum calculation is done 
//     }
//     console.log(sum); and in the end the result will in console

// in conlution this for loop is to get the sum of the number from 1 to 50


// #4

// there will be 5 iterations in this loop
// end the results will be 0, 2, 4, 6, 8


// #5

// break statement is for stop the loop
// when loop will get to the result you already got

for(let i = 0; i < 20; i++){
    console.log(i);
    if(i == 12)
        break;
}

console.log();
// #6

// continue statement is to skip the iteration

for(let i = 0; i < 20; i++){
    if(i == 12)
        continue;
    console.log(i);
}

console.log();
// #7

let iteration = 0;

while((parseInt(Math.random()*101)) != 27){
    console.log(parseInt(Math.random()*101));
    iteration++;
}


console.log(`we got number 27 on ${iteration}th iteration`);


// #8

let password = "";

for(let i = 0; i < 15; i++){
    let number = parseInt(Math.random() * 79);

    let pas = String.fromCharCode(number+49);
    
    password += String(pas);
}

console.log(password);


// #9

let str = "";

for (let i = 0; i < 10; i++) {
    str += Math.random() > 0.5 ? " " : "?";
}

console.log(str);

let result = "Position of ?s is: ";
for(let i = 0; i < str.length; i++){
    if(str[i] == "?")
        result += String(i+1) + ", ";
        
}

console.log(result);


// #10
