//compare karke last m swap krke last m sorted array 
const arr=[8,9,7,5,4,6];
// o/p=[4,5,6,7,8,9]

for(let i=1;i<=arr.length-1;i++){
    for(let j=0;j<arr.length-i;j++){
        if(arr[j+1]<arr[j]){
            let temp=arr[j+1];
            arr[j+1]=arr[j];
            arr[j]=temp;
        }
    }
}

console.log(arr);