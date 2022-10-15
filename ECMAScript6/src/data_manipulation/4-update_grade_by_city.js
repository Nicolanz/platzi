export default function updateStudentGradeByCity(list, city,newGrades ){
    const tmp = list.filter(x => x.location == city).map((ele, idx, aray)=>{
        let myTmp = newGrades.filter((j) => j.studentId == ele.id)
        if (myTmp) {
            
        }
    })

    console.log(tmp);

    return 1
}
