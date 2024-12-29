const mazePath=(sr,sc,dr,dc)=>{
    if(sr==dr && sc==dc){
        let ans=[]
        ans.push('');
        return ans;
    }

    var vpath=[];
    var hpath=[]
    var dpath=[]
    let recans=[]
    for(let maxj=1; maxj<=dr-sr;maxj++){
         vpath=mazePath(sr+maxj,sc,dr,dc);
         for(val of vpath){
             recans.push('v'+maxj+val)
         }
    }

    for(let maxj=1; maxj<=dc-sc;maxj++){
        hpath=mazePath(sr,sc+maxj,dr,dc);
        for(val of hpath){
            recans.push('h'+maxj+val)
        }
    }
    for(let maxj=1; maxj<=dr-sr && maxj<=dc-sc; maxj++){
        dpath=mazePath(sr+maxj,sc+maxj,dr,dc);
        for(val of dpath){
            recans.push('d'+maxj+val)
        }
    }
    return recans

}

console.log(mazePath(1,1,3,3));

