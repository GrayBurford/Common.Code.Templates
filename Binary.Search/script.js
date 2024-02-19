// Binary Search
function fn (arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
      
        if (arr[mid] == target) {
            // do something
            return;
        }
        if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    // left is the insertion point
    return left;
}


// Binary search: duplicate elements, left-most insertion point
function fn (arr, target) {
    let left = 0;
    let right = arr.length;
  
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
      
        if (arr[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}


// Binary search: duplicate elements, right-most insertion point
function fn (arr, target) {
    let left = 0;
    let right = arr.length;
  
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
      
        if (arr[mid] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}


// Binary search: for greedy problems -- looking for MINIMUM
function fn (arr) {
    function check (x) {
        // this function is implemented depending on the problem
        return BOOLEAN;
    }

    let left = MINIMUM_POSSIBLE_ANSWER;
    let right = MAXMIMUM_POSSIBLE_ANSWER;
  
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (check(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
}


// Binary search: for greedy problems -- looking for MAXIMUM
function fn (arr) {
    function check (x) {
        // this function is implemented depending on the problem
        return BOOLEAN;
    }

    let left = MINIMUM_POSSIBLE_ANSWER;
    let right = MAXMIMUM_POSSIBLE_ANSWER;
  
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (check(mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
}
