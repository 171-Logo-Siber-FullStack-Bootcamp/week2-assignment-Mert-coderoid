

// Asenkron Çağırım yapabilmemizi sağlayan "Promise" yapısı 

// Bu kısımda veri gönderilir
const getValue = () => {
    return new Promise((resolve, reject) => {
        var status = true;

        if (status){
            resolve("Veriler getirildi...");    // success durumunda çalışır
        }
        else {
            reject("veri getirilemedi...");     // error durumunda çalışır
        }
    })
}


// const dd = await getValue();    // "await" kullanılarak da asenkron veri çekmek mümkün

// Bu kısımda gönderilen veri tetiklenir
getValue().then(item =>{       
    // success durumunda
    console.log(item)

}).catch(err =>{
    // error durumunda 
    console.log(err)

}).finally(fin =>{
    // her durumunda:
        // - Açık bağlantılar kapatılabilir
        // - Yetki Kontrolü yap
        // - Loglama yapılabilir

    console.log("her iki durumda da çalışır")
})



    // - - - - - - - - - - - - - - - - - - - - - - - - - - - -



/*     // Üstteki yöntemin bir yapıda kullanımı :


const getValue = () => {
    return new Promise((resolve, reject) => {

        try{

            const xhr = new XMLHttpRequest();
            
            xhr.addEventListener("readystatechange", () =>{
                
                if(xhr.readyState == 4) {
                    resolve(xhr.responseText)   // success durumunda çalışır
                }
            });

            xhr.open("GET", "https://jsonplaceholder.typicod.com/users");
            xhr.send();

        }

        catch (error){
            reject(error);
        }
    });
};


// Bu kısımda gönderilen veri tetiklenir
getValue()
    .then((result) => {
        console.log(result);    // gelen veriyi görüntüler
    })

    .catch((err) => {       // error'ları yakalar
        console.log(err)
    });


*/