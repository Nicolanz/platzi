export default function getStudentIdsSum(list){
    return list.reduce((prev, curr)=> curr.id + prev.id)
}
