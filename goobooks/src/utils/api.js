import axios from 'axios';

export default function SearchNovels (query){
    
return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
};
export  function SaveNovel(novelInfo){

    return axios.post(`/${novelInfo.id}`);
};
