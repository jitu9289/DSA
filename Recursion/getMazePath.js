const mazePath=(sr,sc,dr,dc)=>{
    if(sr==dr && sc==dc){
        let ans=[]
        ans.push('');
        return ans;
    }
    var hpath=[]
    var vpath=[]    
    if(sc<dc){
     hpath=mazePath(sr,sc+1,dr,dc);
    }
    if(sr<dr){
     vpath=mazePath(sr+1,sc,dr,dc);
    }
    let recans=[];

    for(val of vpath){
        recans.push('v'+val)
    }
    for(val of hpath){
        recans.push('h'+val)
    }
    return recans


}

console.log(mazePath(1,1,3,3));

