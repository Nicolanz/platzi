const route = '../../utils.js'
export default function handleProfileSignup(){
    import(route).then((res) => {
        return Promise.all([res.createUser(), res.uploadPhoto()]).then((res)=>{
            const myObj = {
                body: res[1].body,
                ...res[0],
            }
            console.log(...Object.values(myObj));
        })
    }).catch(() => {
        console.log('Signup system offline');
    })
}
