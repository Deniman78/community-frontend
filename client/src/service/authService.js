import axios from 'axios'

class AuthService {
    login = (data) => {
        return axios.post('/api/auth/login', data).then(({data}) => {
            if(data.status){
                return data
            }
        }).catch(({response}) => {
            return response.data
        })
    }
    register = (data) => {
        return axios.post('/api/auth/register', data).then(({data}) => {
            if(data.status){
                return data
            }
        }).catch(({response}) => {
            return response.data
        })
    }
}

export default AuthService
