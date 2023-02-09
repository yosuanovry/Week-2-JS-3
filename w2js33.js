// // 1. Promise query + max output
// const cekNama = (query, max) => {
//     return new Promise((resolve,reject) => {
//         const names = [
//             "Abigail","Alexandra","Alison",
//             "Amanda","Angela","Bella",
//             "Carol","Caroline","Carolyn",
//             "Deirdre","Diana","Elizabeth",
//             "Ella","Faith","Olivia","Penelope"
//         ]
//         let prosesNama = names.filter(el => el.toLowerCase().includes(query.toLowerCase()))
//         let cek = prosesNama.splice(0,max)

//         if(cek) {
//             resolve(cek)
//         } else {
//             reject(`Gagal`)
//         }
//     })
// }

// cekNama('an', 3)
// .then(result => {console.log(result)})
// .catch(error => {console.log(error)})

// 2. Promise cek orang ganteng

const orangGanteng = (value) => {
  var testerGanteng = Math.random();

  if (testerGanteng >= 0.01 && testerGanteng <= 0.5) {
    return (value = true);
  } else {
    return (value = false);
  }
};

const cekOrangGanteng = new Promise((resolve, reject) => {
  if (orangGanteng(true)) {
    setTimeout(() => {
      resolve(`confirmed orang ganteng`);
    }, 1000);
  } else {
    setTimeout(() => {
      reject(`bukan orang ganteng`);
    }, 1000);
  }
});

console.log(`mulai`);

cekOrangGanteng.then((result) => console.log(`Selamat! anda ` + result)).catch((result) => console.log(`Selamat! anda ` + result));

setTimeout(() => {
  console.log(`selesai`);
}, 1500);
