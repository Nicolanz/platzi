export default function getStudentsByLocation(list, city){
    return list.filter((element) => element.location === city)
}
