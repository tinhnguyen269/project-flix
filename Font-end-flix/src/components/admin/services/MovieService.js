import axios from "axios";

export const getAllMovies = async () =>{
    try {
        let movies = await axios.get("http://localhost:8080/movies");
        return movies.data;
    }catch (e){
        console.error("loi lay danh sach movie")
    }
}
