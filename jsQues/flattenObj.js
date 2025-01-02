
const flat = (obj, parent) => {
    var ans = {}
   const  generateFlat=(obj, parent)=>{
    for (key in obj) {
        let newparent = parent+key;
        let val = obj[key];
        if (typeof val =='object') {
            generateFlat(val, newparent+'.')
        } else {
            ans[newparent] = val
        }
    }
}
generateFlat(obj,parent)
    return ans
}

const nestedObject = {
    name: 'Alice',
    address: {
        city: 'Wonderland',
        coordinates: {
            lat: 52.52,
            long: 13.405
        }
    },
    hobbies: ['reading', 'chess']
};


console.log(flat(nestedObject, ''));