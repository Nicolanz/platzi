
export default function getStudentIdsSum(getListStudents){
    const total = getListStudents.reduce((total, currElement) =>{
        return total + currElement.id
    }, 0)

    return total
}
