const arr=[7,9,0,0,9,0,8];

function move(arr){
  let i=0;
  let j=0;
  while(i<arr.length){
    if(arr[i]==0){
      i++;
    }else{
      let temp=arr[i];
      arr[i]=arr[j];
      arr[j]=temp;
      i++;
      j++;
    }
  }
  console.log(arr)
  return arr;
}


console.log(move(arr))