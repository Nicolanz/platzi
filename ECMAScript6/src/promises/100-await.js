export default async function asyncUploadUser(){
    try {
        const utils = await import('../../utils.js')
        const user = await utils.createUser()
        const photo = await utils.uploadPhoto()
        return {
            user,
            photo,
        }
    } catch {
        return {
            photo: null,
            user: null,
        }
    }
}
