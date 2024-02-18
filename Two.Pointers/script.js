
// Two Pointers: one input, opposite ends:
function fn (arr) {
    let ans = 0;
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // do some logic here with left and right
        if (CONDITION) {
            left++;
        } else {
            right--;
        }
    }

    return ans;
}


// Two pointers: two inputs, exhaust both
function fn (arr1, arr2) {
    let i = 0;
    let j = 0;
    let ans = 0;
    
    while (i < arr1.length && j < arr2.length) {
        // do some logic here
        if (CONDITION) {
            i++;
        } else {
            j++;
        }
    }

    while (i < arr1.length) {
        // do logic
        i++;
    }

    while (j < arr2.length) {
        // do logic
        j++;
    }

    return ans;
}
