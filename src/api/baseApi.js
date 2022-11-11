import axios from 'axios'

const url = 'https://todo.api.devcode.gethired.id'

export default axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json"
    }
})