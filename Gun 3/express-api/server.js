const express = require("express");                 // express paketini çağırdık
const posts = require("./data/posts.json");        // posts.json dosyasını çağırdık
const users = require("./data/users.json");       // posts.json dosyasını çağırdık



const app = express();                  // express ile bir uygulama oluşturduk

/*  POST ve GET çağrılarını yakalama

    // "GET" çağrılarını yakalıyoruz
app.get("/", (req, res) =>{
    res.send("GET yakalandı...");
});

    // "GET" çağrılarını yakalıyoruz
app.post("/", (req, res) =>{
    res.send("POST yakalandı...")
})

*/


app.get("/users", (req, res) =>{

        // gelen "request"in "query" objesindeki "id"sini alıyoruz
    // console.log(req.query.id)
    // res.send("GET yakalandı...");

    if (req.query.id){
        let item = users.filter(x => x.id == req.query.id);
        res.send(item);
    }
    else{
        res.send(users);
    }
});

app.get("/users", (req, res) =>{
    res.send("GET yakalandı...");
});



const PORT = 4000;

app.listen(PORT);