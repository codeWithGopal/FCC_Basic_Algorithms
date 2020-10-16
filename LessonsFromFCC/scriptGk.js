// Convert Celsius to FahrenheitPassed

const celToFah = cel => (cel * 9 / 5) + 32;
console.log(celToFah(50));

//Reverse a StringPassed

const reverseString = str => {

    const strArr = str.split('');
    const result = [];
    for (let i = strArr.length - 1; i >= 0; i--) {
        result.push(strArr[i]);
    }
    return result.join('');
};

console.log(reverseString("GOPAL"));
console.log(reverseString("Greetings from Earth"));

//Factorialize a Number


const factorial = num => {
    if (num === 0) {
        return 1;
    } else {

        let result = 1;
        for (let i = num; i > 0; i--) {
            result *= i;
        }
        return result;
    }
};

console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));


// Find the Longest Word in a String

const findLongWordLength = str => {

    const strArr = str.split(" ");
    let result = strArr[0].length;
    for (let i = 1; i < strArr.length; i++) {
        if (strArr[i].length > result) {
            result = strArr[i].length;
        }

    }
    return result;

};
console.log(findLongWordLength('The quick brown fox jumped over the lazy dog'));
console.log(findLongWordLength('What if we try a super-long word such as otorhinolaryngology'));


// Basic Algorithm Scripting: Return Largest Numbers in Arrays

function largestNum(arr) {

    let finalArr = [];

    for (let i = 0; i < arr.length; i++) {
        let result;
        result = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {


            if (arr[i][j] > result) {
                result = arr[i][j];
            } else {
                result = result;
            }

        }
        finalArr.push(result);
    }
    return finalArr;
}

console.log(largestNum([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]));


//Basic Algorithm Scripting: Confirm the Ending


const confirmEnd = (str, end) => {

    return str.slice(str.length - end.length) === end;

};
console.log(confirmEnd("Open sesame", "same"));
console.log(confirmEnd("Walking on water and developing software from a specification are easy if both are frozen", "specification"));

//Basic Algorithm Scripting: Repeat a String Repeat a String

const repeatStr = (str, num) => {
    if (num <= 0) {
        return "";
    } else {
        let result = str;

        for (let i = 1; i < num; i++) {
            result += str;

        }
        return result;


    }

};

console.log(repeatStr("abc", 3));

// Basic Algorithm Scripting: Truncate a String

const truncateString = (str, num) => {

    if (str.length > num) {
        return str.slice(0, num) + '...';

    } else {
        return str;
    }


};

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(truncateString("Absolutely Longer", 2));


// Basic Algorithm Scripting: Finders Keepers

const findElement = (arr, func) => arr.find(func);


console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

// Basic Algorithm Scripting: Boo who

function booWho(bool) {
    return (bool === true || bool === )
};

booWho(null);