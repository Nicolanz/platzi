export default class HolbertonCourse{
    constructor(name, length, students) {
        if (typeof name !== "string") {
            throw new Error("Name must be a string");
        } else if ( typeof length !== "number" ){
            throw new Error("Length must be a number");
        } else if (!Array.isArray(students)){
            throw new Error("Students must be an array");
        }
        students.forEach((x)=>{
            if (typeof x !== "string"){
                throw new Error("Students must be an array of strings")
            }
        })

        this._name = name;
        this._length = length;
        this._students = students;
    }

    get name(){
        return this._name
    }
    get length(){
        return this._length
    }
    get students(){
        return this._students
    }

    set name(newName) {
        if (typeof newName !== 'string'){
            throw new Error("Name must be a string")
        }
        this._name = newName
    }
    set length(newLength){
        if (typeof newLength !== 'number'){
            throw new Error('Length must be a number')
        }
        this._length = newLength
    }
    set students(newStudents){
        if (!Array.isArray(newStudents)){
            throw new Error("Students must be an array");
        }
        newStudents.forEach((x)=>{
            if (typeof x !== "string"){
                throw new Error("Students must be an array of strings")
            }
        })
        this._students = newStudents
    }
} 
