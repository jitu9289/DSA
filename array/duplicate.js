const arr = [7, 8, 9, 7, 8, 3, 4, 2, 2];

function ans(arr) {
    let freq = {};
    let ans = {}; // Store only duplicates

    for (let i = 0; i < arr.length; i++) {
        if (freq[arr[i]]) {
            // return arr[i]   return the dupliacte 
            freq[arr[i]]++; 
            ans[arr[i]] = freq[arr[i]]; // Store count of duplicates
        } else {
            freq[arr[i]] = 1;
        }
    }
    
    return ans; // Return only duplicates with their count
}

console.log(ans(arr));
