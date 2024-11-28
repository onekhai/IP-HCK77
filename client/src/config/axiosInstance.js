import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.rawg.io/api/games?key=752b414c40f749e1ba6ebf14cb2e43b1",
});

export default instance;
