// for(let i=1; i <= 10; i++)
// {
//     console.log(i);
// }

// for(let i=1; i <=100; i++)
// {
//     if (i % 2 == 0){
//         //console.log(i + " - Even")
//         console.log(`${i} - Even`)
//     }
//     else {
//         //console.log(i + " - Odd")
//         console.log(`${i} - Odd`)
//     }
// }

// let num = 1
// while(num <= 10)
// {
//     console.log(num)
//     num++;
// }

// var num1 = 11
// do{
//     console.log(num1)
//     num1++;
// }while(num1 <= 20)

// let num = 1
// while(num <= 100)
// {
//     console.log(num)
//     num = num + 1;
// }

//Print Leap Year 2000 - 2030
for (let year = 2000 ; year <= 2030; year++)
{
    if(year % 4 == 0)
    {
        console.log(`${year} is a leap year!`)
    }
}

//Leap year using while
let year = 2000
while(year < 2030)
{
    if(year % 4 == 0)
    {
        console.log(`${year} is a leap year! //Using WHILE LOOP`)
    }
    year++;
}

//Leap year using do/while loop 
 
year = 2000
do{
    if(year % 4 == 0)
    {
        console.log(`${year} is a leap year! //Using Do/While LOOP`)
    }
    year++;
}
while (year < 2030)


//Print sum from 1-10

let sum = 0;
for (let n=1; n <= 10; n++)
{
    sum += n; 
}
console.log(`Sum of 1 to 10 is ${sum}`)

//Show prompt 

// do{
//     var number = prompt("Enter a number")
//     if (number == 1)
//     break;
// }while(true)

// do{
//     var number = prompt("Enter a number")
//     console.log(number)    
// }while(number != 1)


//Question: Input 2 number from box, show sum from 1st number to 2nd number
function sumNumber(){
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)

    let result = 0;
   
    // for (; num1 <= num2; num1++)
    // {
    //     result += num1;
    // }

    while(num1 <= num2)
    {
        result +=num1;
        num1++;
    }
    
    // do{
    //     result += num1;
    //     num1++;
    // } while(num1 <= num2)

    document.getElementById("result").innerHTML = "<b>Result = </b>" + result;
}


