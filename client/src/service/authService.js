import axios from 'axios'

class AuthService {
    login = (data) => {
        axios.post('/api/auth/login', data).then(({data, status}) => {
            if(status === 200){
                return data
            }
        })
    }
    register = (data) => {
        return axios.post('/api/auth/register', data).then(({data, status}) => {
            if(status === 201){
                return  {status: 'success', message: data.message}
            }
        }).catch(({response}) => {
            return {status: 'error', message: response.data.message}
        })
    }
}

export default AuthService
