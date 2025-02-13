const str1 = "jitu";
const str2 = "ijtu";

function solution(str1, str2) {
    // if (str1.length !== str2.length) return false; // Length check

    // const freq = {};

    // // Count characters in str1 and decrease count for str2
    // for (let i = 0; i < str1.length; i++) {
    //     let char1 = str1[i];
    //     let char2 = str2[i];

    //     freq[char1] = (freq[char1] || 0) + 1;
    //     freq[char2] = (freq[char2] || 0) - 1;
    // }

    // // Check if all values in the frequency object are zero
    // for (let key in freq) {
    //     if (freq[key] !== 0) {
    //         return false;
    //     }
    // }

    // return true;

    const freq=new Array(26).fill(0);

    let S1=str1.toLowerCase();
    let S2=str2.toLowerCase();

    if(S1.length!==S2.length){
        console.log("hell0")
        return false
    }

    for(let i=0;i<S1.length;i++){
        freq[S1.charCodeAt(i)-97]++
        freq[S2.charCodeAt(i)-97]--
    }
    for(val of freq){
        if(val!==0){
            console.log("hellukyfuyiuyfyiu0")
            return false;
        }
    }

    return true
}

console.log(solution(str1, str2)); // Output: true
