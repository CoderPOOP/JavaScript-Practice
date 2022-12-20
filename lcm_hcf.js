let hcf;
const number1 = 2;
const number2 = 5;

// looping from 1 to number1(24) and number2(15) to find HCF
for ( let i = 1; i <= number1 && i <= number2; i++ )
{

    // check if is factor of both integers
    if( number1 % i == 0 && number2 % i == 0 )
    {
        hcf = i;
    }
}

// find LCM
let lcm = (number1 * number2) / hcf;

// display the lcm
console.log(`LCM of ${number1} and ${number2} is ${lcm}.`);
// display the hcf
console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);