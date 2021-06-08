import axios from "axios";

export default {
    //Looks for a novel
    search: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q= + {query}`)
},
//Saves the book to the mongodb
SaveNovel: function(novelInfo){
return axios.post(`/${novelInfo.id}`);
},
//Gets the books you have saved from the DB
getNovels: function() {
    return axios.get("/api/novels");
},
//Gets novels with the id given 
getNovels: function(id){
    return axios.get("/api/novels" + id);
},
//Deletes a book with the corresponding id from the database
deleteNovel: function (id){
    return axios.delete("/api/novels" + id);
}
    
};
