import axios from "axios";
//eslint-disable-next-line
export default {
    //Looks for a novel
    googleNovels: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
},
//Saves the book to the mongodb
SaveNovel: function(novelInfo){
return axios.post(`/${novelInfo.id}`);
},
//Gets the books you have saved from the DB
getNovels: function() {
    return axios.get("/api/novels").then(result => result.data).catch(error => {throw error});
},
//Gets novels with the id given 
getNovel: function(id){
    return axios.get("/api/novels" + id);
},
//Deletes a book with the corresponding id from the database
deleteNovel: function (id){
    return axios.delete("/api/novels" + id);
}
    
};
