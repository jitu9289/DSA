const printSub=(str,ans)=>{
    if(str.length===0){
        console.log(ans);
        return;
    }
    let ch=str[0];
    let ros=str.slice(1);
    printSub(ros,ans+'')
    printSub(ros,ans+ch);
    return;

}

printSub('abc','');