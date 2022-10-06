export default function iterateThroughObject(reportWithIterator) {
    let mystr = '';
    reportWithIterator.map((item, index, array)=>{
        if (index === 0){
            mystr += item
        }
        else if (index != array.lenght - 1){
            mystr += ' | ' + item
        }
    })
    return mystr;
}
