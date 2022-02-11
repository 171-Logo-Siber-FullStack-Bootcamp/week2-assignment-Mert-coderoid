const http = require("http");
const users = require("./data/users.json")
const posts = require("./data/posts.json")


const server = http.createServer((req, res) =>{

    console.log("Talep geldi: ", req.url)
    
    if (req.url === "/users"){

        // Users geriye dönecek
        res.setHeader("Content-Type","application/json");
        res.write(JSON.stringify(users));
        res.end();
    }
    else if (req.url === "/posts")
    {
        // geriye Posts dönecek
        res.setHeader("Content-Type","application/json");
        res.write(JSON.stringify(posts));
        res.end();
    }
    else {
        // 404 dönecek
        res.setHeader( "Content-Type", "application/json");
        res.end(JSON.stringify({ message: "Yönlendirme hatalı"}));
    }
})

const PORT = 4500;

server.listen(PORT, () => console.log(`server ${PORT} portu üzerinde çalışmaya başladı...`));