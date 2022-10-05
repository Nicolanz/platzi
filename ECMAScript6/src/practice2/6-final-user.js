export default async function handleProfileSignup(firstName, lastName, filename){
    const promiseResolved = await import('./4-user-promise.js')
    const promiseRejected = await import('./5-photo-reject.js')

    return Promise
    .allSettled([promiseResolved.default(firstName, lastName), promiseRejected.default(filename)])
    .then(res => res)
                    
}
