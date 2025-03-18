const jwt = require('jsonwebtoken')
const dotevn = require('dotenv'); 

dotevn.config()

const generalAccessToken = async (payload) =>{
    const access_token = jwt.sign({
        payload
    }, process.env.ACCESS_TOKEN, {expiresIn: '1h'})
    return access_token
}

const generalRefershToken = async (payload) =>{

    const refresh_token = jwt.sign({
        payload
    }, process.env.REFRESH_TOKEN, {expiresIn: '365d'})
    return refresh_token
}

const refreshTokenJwtService = (token) =>{
    return new Promise((resolve, reject) => {
        try{
            console.log('token', token);
            jwt.verify(token, process.env.REFRESH_TOKEN, async (err, user) =>{
                if(err){
                    console.log('err: ', err)
                    resolve({
                        status: 'ERROR',
                        message: 'THE AUTHENTICATION'
                    })
                }
                const { payload } = user
                const access_token = await generalAccessToken({
                    id: payload?.id,
                    isAdmin: payload?.isAdmin
                })
                console.log('access_token: ', access_token)
                resolve({
                    status: 'OK',
                    message: 'SUCESS',
                    access_token
                })
            })
        }catch(e){
            reject(e)
        }
    })
}

module.exports = {
    generalAccessToken,
    generalRefershToken,
    refreshTokenJwtService
}