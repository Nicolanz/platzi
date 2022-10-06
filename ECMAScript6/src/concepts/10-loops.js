export default function appendToEachArrayValue(array, appendString) {
    for (const element of array) {
        const idx = array.indexOf(element)
        array[idx] = element + appendString;
    }
  
    return array;
  }
