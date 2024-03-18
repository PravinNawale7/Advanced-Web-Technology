
const arr1 = [1, 2, 3, 4];
const arr2 = [4, 3, 2, 1];
const arr3 = [5, 3, 7, 2, 6];
function isSorted(arr) {
    let sorted = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            if (sorted == -1) return 0;
            sorted = 1;
        } else if (arr[i] > arr[i + 1]) {
            if (sorted == 1) return 0;
            sorted = -1;
        }
    }

    return sorted;
}

console.log("array1 is asending:", isSorted(arr1)); 
console.log("array2 is desending:", isSorted(arr2)); 
console.log("array3 is unsorted:", isSorted(arr3)); 
