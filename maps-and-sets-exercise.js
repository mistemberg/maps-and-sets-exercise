//Quick Question #1
//What does the following code return?
new Set([1,1,2,2,3,4]); //[1,2,3,4]

//Quick Question #2
//What does the following code return?
[...new Set("referee")].join(""); // "ref"

//Quick Question #3
//What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
/*
0:{Array(3) => true}
1:{Array(3) => false}
*/

//Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length;

//Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
function vowelCount(str){
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const countMap = new Map();
    string = str.toLowerCase();

    for(let char of str){
        if(vowels.has(char)){
            if(countMap.has(char)){
                countMap.set(char, countMap.get(char) + 1);
            } else {
                countMap.set(char, 1);
            }
        }
    }
    return countMap;
}

