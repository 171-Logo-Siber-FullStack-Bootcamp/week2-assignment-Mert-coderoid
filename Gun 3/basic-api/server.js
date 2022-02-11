const http = require("http");   // server oluşturmak için gerekli olan kütüphaneyi ekledik
const data = require("./data.json")     // data.json dosyasındaki verileri data değişkenine ekledik


// Server Oluştur
const server = http.createServer((req, res) => {    // request ve response u yakalayacağımız parametreleri verdik
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader("Content-Type",  "application/json" /*"text/html"*/);   // oluşturulan response'un header bilgileri veriliyor...
    // res.write("<hr/>Server Calisti<hr/>");
    
    // veriyi string'e çevirdik ve gönderdik 
    res.write(JSON.stringify(data))           // oluşturulan response'un body bilgisi veriliyor...
    res.end();                          // işlem tamamlandı
})    



// PORT numarasını belirle
const PORT = 5000;

// Server'ı dinlemeye başla
server.listen(PORT, () => console.log(`server ${PORT} üzerinde çalışmaya başladı`))     // listener bir metot ekliyoruz
