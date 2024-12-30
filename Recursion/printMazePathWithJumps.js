const printMazePath = (sr, sc, dr, dc, ans) => {

    if (sc == dc && sr == dr) {
        console.log(ans);
        return;
    }
    for(let r=1;r<=dr-sr;r++){
        printMazePath(sr+r,sc,dr,dc,ans+'v'+r)
    }
    for(let c=1;c<=dc-sc;c++){
        printMazePath(sr,sc+c,dr,dc,ans+'h'+c)
    }
    for(let d=1;d<=dr-sr && d<=dc-sc;d++){
        printMazePath(sr+d,sc+d,dr,dc,ans+'d'+d)
    }

}

printMazePath(1, 1, 3, 3, '')

