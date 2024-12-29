


// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const str = 'abc';

function subs(str) {
    if (str.length === 0) {
        let ans = [];
        ans.push('');
        return ans;
    }
    let ch = str[0];  // (abc) ch = a
    let ros = str.slice(1); // ros = bc
    let res = subs(ros); // bc -> ["", "b", "c", "bc"] rec ye res le aaya
    let recans = [];
    for (let val of res) {
        recans.push('' + val); // bc k res k saat ek baar _ add kr diya
        recans.push(ch + val); // bc k res k saat ek baar a add kr diya
    }
    return recans;
}

console.log(subs(str)); // Output all subsequences


