
// Asenkron Çağırım yapabilmemizi sağlayan "Callback" yapısı  / genelde bu yöntem yerine "Promise" kullanılır

// Bu kısımda veri gönderilir
const getValues = (callback) => {

  var durum = true;

  if (durum) {
    callback(undefined, "Method ok");   // ilk parametresi error, ikinci parametresi success'tir
  } 
  else {
    callback("veri getirilemedi", undefined);   // ilk parametresi error'dur
  }
};


// Bu kısımda gönderilen veri tetiklenir
getValues((err, data) => {
  if (err) {
    // hata alınınca çalışacak kodlar
    console.log(err);   
  } 
  else {
    console.log(data);
  }
});

// -------------------


/*  getValues'a parametre olarak metot göndererek de bu işlemi yapabiliriz

const method = (err, data) => {
  if(err) {
    // hata alınması durumunda çalışacak kodlar
    console.log(err);
  }
  else {
    console.log(data)
  }
}

getValues(method) 

*/