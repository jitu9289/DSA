const n = 3
const getStairPath = (n) => {
    if (n == 0) {
        let ans = [];
        ans.push('');
        return ans;
    } else if (n < 0) {
        let ans = [];
        return ans;
    }

    let path1=[];
    let path2=[];
    path1=getStairPath(n-1);  // 1 jump
    path2=getStairPath(n-2); // 2 jump
    let recans=[];
    for(val of path1){ // path1 have ans of n-1 to n so if i add n-1 +1 == n
        recans.push(1+val);
    }
    for(val of path2){  // path1 have ans of n-2 to n so if i add n-2 +2 == n
        recans.push(2+val);
    }
    let count=recans.length;
    console.log(count); //total no of ways of path 
    return recans  // all path 
    
}

console.log(getStairPath(n))