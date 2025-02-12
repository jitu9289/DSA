const arr=[7,9,7,1,4,3,2,6,-1]
let k=5;

function twosum(arr,k){
    let map=new Map();
    let count=0;
    let ans=[];
    for(let i=0;i<arr.length;i++){
        if(map.has(k-arr[i])){
            let temp=[];
            temp.push(arr[map.get(k-arr[i])]);
            temp.push(arr[i])
            ans.push(temp);
            count++;
        }else{
            map.set(arr[i],i);
        }
    }
    console.log(count);
    return ans;
}


console.log(twosum(arr,k));