//min find and then swap with outerloop i
const arr = [8, 9, 7, 5, 4, 6];
// o/p=[4,5,6,7,8,9]
console.log(arr);

for (let i = 0; i <= arr.length - 1; i++) {
    let mi=i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[mi]) {
            mi=j;
        }
    }
    let temp=arr[mi];
    arr[mi]=arr[i];
    arr[i]=temp;
    
}

console.log(arr);