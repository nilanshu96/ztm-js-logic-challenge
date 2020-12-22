//Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

const inputArray = [1, 1, 2, 3, 5, -1];
const inputSum = 4;

function pairSum(arr, sum) {

    console.log("input array: ", arr);
    console.log("input sum: ", sum);
    
    arr.sort((a, b) => a - b);

    const sumPairs = [];

    let idx = 0;
    while (idx < arr.length) {

        let pairIdx = arr.indexOf(sum - arr[idx], idx + 1);
        if (pairIdx !== -1) {
            sumPairs.push([arr[idx], arr[pairIdx]]);
            arr.splice(pairIdx, 1); //should be deleted before idx as pairIdx is greater than idx and after deletion the array length changes
            arr.splice(idx, 1);
        } else {
            idx++;
        }
    }

    console.log("output: ", sumPairs);
}

pairSum(inputArray, inputSum);