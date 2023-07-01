import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8082/api",
    headers: {
        "Content-Type" : "application/json"
    }
})