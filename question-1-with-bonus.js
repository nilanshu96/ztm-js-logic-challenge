// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

//numbers + strings
const input1 = [1, 2, 4, 591, 392, 391, "2", 5, 10, 2, "1", "1", 1, 20, 20];

//numbers
const input2 = [1, 1, 3, 2, 3, 2];

//strings
const input3 = ["1", "2", "1", "2", "3"];

function compare(a, b) {
    if (a > b) return 1; // if the first value is greater than the second
    if (a == b) return 0; // if values are equal
    if (a < b) return -1; // if the first value is less than the second
}

function groupIdenticals(arr) {
    let startIdx = 0;
    let endIdx = 1;

    while (endIdx < arr.length) {

        while (arr[endIdx] === arr[startIdx]) {
            endIdx++;
        }

        if (endIdx > startIdx + 1) {
            const arrayOfIdenticals = arr.slice(startIdx, endIdx);
            arr.splice(startIdx, endIdx - startIdx, arrayOfIdenticals);
        }

        startIdx++;
        endIdx = startIdx + 1;
    }
}

function cleanTheRoom(arr) {

    console.log("input: ", arr);

    const numberArray = arr.filter(num => typeof (num) === 'number');
    const stringArray = arr.filter(num => typeof (num) === 'string');

    numberArray.sort(compare);
    groupIdenticals(numberArray);

    stringArray.sort(compare);
    groupIdenticals(stringArray);

    if (!numberArray.length) {
        arr.splice(0, arr.length, ...stringArray);
    } else if (!stringArray.length) {
        arr.splice(0, arr.length, ...numberArray);
    } else {
        arr.splice(0, arr.length, numberArray, stringArray);
    }

    console.log("output: ", arr, '\n');

}

cleanTheRoom(input1);
cleanTheRoom(input2);
cleanTheRoom(input3);


