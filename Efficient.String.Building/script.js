// arr is a list of characters
function fn (arr) {
    let ans = [];
  
    for (const c of arr) {
        ans.push(c);
    }

    return ans.join("")
}


function fn (arr) {
    let ans = "";
  
    for (const c of arr) {
        ans += c;
    }

    return ans;
}
