export default async function asyncUploadUser(){
    const utils = await import('../../utils.js')
    const user = await utils.createUser()
    const photo = await utils.uploadPhoto()

    return {
        user,
        photo,
    }
}
