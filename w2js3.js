const cekHariKerja = (day) =>  {
  return new Promise((resolve, reject)=>{
   setTimeout(()=>{
      const dataDay = ['senin', 'selasa','rabu','kamis','jumat']
      let cek = dataDay.find((item)=>{
          return item === day
      })

      if(cek){
         resolve(cek)
      }else{
        reject(new Error("Hari ini bukan hari kerja"));
      }
  },0)
  })
}

// .then .catch = untuk menampilkan data dari function yang menggunakan promise

cekHariKerja('jumat')
.then(result => {console.log(result)})
.catch(error => {console.log(error)})


// .try .catch = sama seperti then catch namun try catch digunakan khusus untuk async await,
// sedangkan .then .catch khusus untuk Promise

async function tryCatch(query) {
  try {
    let cekHari = await cekHariKerja(query.toLowerCase());
    console.log(`${cekHari} merupakan hari kerja`);
  } catch (error) {
    console.log(error);
  }
}

tryCatch('SELASA');
