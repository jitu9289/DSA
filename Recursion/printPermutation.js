const printPermutation=(str,ans)=>{
     if(str.length==0){
        console.log(ans);
        return;
     }

    for(let i=0;i<str.length;i++){
        let ch=str[i];
        let f=str.slice(0,i);
        let l=str.slice(i+1);
        let ros=f+l;
        printPermutation(ros,ch+ans);
    }
}

printPermutation('abc','');