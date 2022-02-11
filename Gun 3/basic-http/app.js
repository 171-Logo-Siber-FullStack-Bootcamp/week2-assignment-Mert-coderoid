
/*  // en basic asenkron çağırım yapar
    
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users" )
    xhr.send(); 

*/

const xhr = new XMLHttpRequest();


xhr.addEventListener("readystatechange", () =>{
    if(xhr.readyState == 4) {
        console.log(xhr.responseText)
    }
});



xhr.open("GET", "https://jsonplaceholder.typicode.com/users" )


xhr.send(); 

    // "ReferenceError: XMLHttpRequest is not defined"
        // bu hatanın sebebi node engine yerine tarayıcı üzerindeki engine'i kullanmaya başlıyor
        // chrome console üzerinden işlemi görebiliriz
