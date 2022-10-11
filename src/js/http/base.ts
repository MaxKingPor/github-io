import axios from "axios"


let session = axios.create({
    baseURL: "/api/",
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})


export let request = session;



