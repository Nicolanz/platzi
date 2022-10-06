
const routeEmployees = './11-createEmployeesObject.js'
const routeReport = './12-createReportObject.js'
const routeIterator = './100-createIteratorObject.js'
const routeThrought = './101-iterateThroughObject.js'


const mainFunc = async () =>{
    const createEmployess = await import(routeEmployees)
    const createReport = await import(routeReport)
    const iterator = await import(routeIterator)
    const stringIterator = await import(routeThrought)

    let myEmployees = {
        ...createEmployess.default("Sales", ["Diego", "Luis"]),
        ...createEmployess.default("Software", ["Pepe", "Nicolas"]),
    }
    const report = createReport.default(myEmployees)
    const iteratorObj = iterator.default(report)
    const stringEmployees = stringIterator.default(iteratorObj)

    console.log(myEmployees);
    console.log(report);
    console.log(report.getNumberOfDepartments(report.allEmployees));
    console.log(iteratorObj);
    console.log(stringEmployees);
}

mainFunc();

// same result promises
// import(routeEmployees).then((module)=>{
//     myEmployees = {
//         ...module.default("Sales", ["Diego", "Luis"]),
//         ...module.default("Software", ["Pepe", "Nicolas"]),
//     }

//     console.log(myEmployees);
// }).catch((err)=>{
//     console.log(err.message);
// })
