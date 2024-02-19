// arr is a list of characters
function fn (arr) {
    let ans = [];
  
    for (const c of arr) {
        ans.push(c);
    }

    return ans.join("")
}

// In JavaScript, benchmarking shows that concatenation with += is faster than using .join().

function fn (arr) {
    let ans = "";
  
    for (const c of arr) {
        ans += c;
    }

    return ans;
}
