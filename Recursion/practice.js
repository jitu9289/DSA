// const rec=(str)=>{
//     if(str.length==0){
//         let ans =[];
//         ans.push('');
//         return ans;
//     }
//     let ch=str[0];
//     let ros=str.slice(1);
//     let recans=rec(ros);
//     let res=[]
//     for(val of recans){
//       res.push(''+val);
//       res.push(ch+val);
//     }
//     return res;
// }
// const arr='2143'
// console.log(rec(arr,0))