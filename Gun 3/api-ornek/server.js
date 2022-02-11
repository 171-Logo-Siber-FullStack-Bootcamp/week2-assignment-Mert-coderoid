const postsController = require("./controllers/posts-controlers");
const usersController = require("./controllers/users-controlers");
const express = require("express");
const cors = require("cors")

// app değişkenini express'in nesnesi haline getirdik
const app = express()

app.use(cors());

app.get("/posts", (req, res) => {
        
        // controller call  - postController dosyasından getAllPosts fonksiyonunu çağırdık
    let posts = postsController.getAllPosts();

    // data return
    res.send(posts);
})

    // parametre alan bir post endpoint yaptık
app.get("/posts/:postId", (req, res) => {
        // post controller içerisinden getPostById isimli metotu tektikledik
    var post = postsController.getPostsById(req.params.postId);
    res.send(post); 
})

app.get("/users", (req, res) =>{
    let users = usersController.getAllUsers();
    res.send(users)
})

// 5000 portunu dinliyoruz
app.listen(5000);