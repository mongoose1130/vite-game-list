import axios from "axios";

const key = "13e8432551534c7db7a682d26c2fb77b"
const axiosCreate = axios.create({
    baseURL: "https://api.rawg.io/api"
})

export function getGenreList() {
    return axiosCreate.get(`/genres?key=` + key);
}
export function getGameList() {
    return axiosCreate.get(`/games?key=` + key);
}

export function getGamesByGenre(id) {
    return axiosCreate.get(`/games?key=` + key + `&genres=` + id);
}
