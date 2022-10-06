export default function handleResponseFromAPI(promise){
    promise
    .then( res => { return { status: 200, body: 'success'}})
    .catch( err => new Error())
    .finally( res => console.log('Got a response from the API') )
}
