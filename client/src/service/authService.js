import axios from 'axios'

class AuthService {
    login = (data) => {
        return axios.post('/api/auth/login', data).then(({data}) => {
            if(data.status){
                localStorage.setItem('token', data.token)
            }
            return data
        }).catch(({response}) => {
            return response.data
        })
    }
    logout = () => {
        // TODO: clear state
        localStorage.removeItem('token')
    }
    register = (data) => {
        return axios.post('/api/auth/register', data).then(({data}) => {
            if(data.status){
                localStorage.setItem('token', data.token)
            }
            return data
        }).catch(({response}) => {
            if(response.data.errors){
                return {status: false, error: response.data.errors[0].msg}
            }
            return response.data
        })
    }
}

export default AuthService
