class APIService {
    static custom_request(method, url, use_auth=false, body = null){
        let requestOptions = {
            method: method,
            headers: { 'Content-Type': 'application/json' }
        }
        if (body) {
            requestOptions.body = JSON.stringify(body)
        }
        console.log(localStorage.getItem('token'))
        console.log("aith")
        if (use_auth) {
            requestOptions.headers['Authorization'] = "Bearer " + localStorage.getItem('token')
        }
        let full_url = "http://localhost:8000/api/v1/" + url
        return fetch(full_url, requestOptions)
    }
}

export default APIService