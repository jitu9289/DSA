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

function rec(digits,ans) {
    if (digits.length === 0) {
        console.log(ans);
        return;
    }

    const freq = ['', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const ch=digits[0];
    let rodig=digits.slice(1);
    let value=freq[ch-1];
    for(val of value){
        rec(rodig,val+ans);
    }

}

rec('478','')
