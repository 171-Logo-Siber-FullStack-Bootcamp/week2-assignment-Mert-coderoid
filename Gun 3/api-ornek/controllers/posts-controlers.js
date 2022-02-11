const posts = require("../data/posts.json")     // postları import ettik

    
getAllPosts = () => {

    // bütün post'ları return ettik
    return posts;

}

    // Parametre olarak postId alır
getPostsById = (postId) => {
        // parametre olarak aldığımız postId'ye ait postu return eder
    return posts.filter(x => x.id == postId);
}

    // "getAllPosts" ve "getPostsById"yi export ederek başka bir dosyadan ulaşılmasını sağladık 
module.exports = {getAllPosts, getPostsById};