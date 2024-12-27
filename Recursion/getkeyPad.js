/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits === "") {
        return [];
    } else {
        return rec(digits);
    }
};

function rec(digits) {
    if (digits.length === 0) {
        let ans = [];
        ans.push('');
        return ans;
    }

    const freq = ['', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const dig = digits[0];
    const rodig = digits.slice(1); // Remaining digits for recursion
    let resrec = rec(rodig);  // Recursive call for remaining digits
    let result = [];

    for (res of resrec) {  // Loop through combinations from recursion
        for (val of freq[dig - 1]) {  // Loop through current digit's characters
            result.push(val + res); // Combine and push to result
        }
    }
    return result;
}
