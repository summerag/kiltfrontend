const baseUrl = "http://localhost:3001/players"

const getAll = () => {
    const request = fetch(baseUrl)
    return request.then(response => response.data)
}


const services = { getAll }
export default services