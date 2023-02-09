const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['January', 'February', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
        if (!error) {
            callback(null,month)
        } else {
            callback(new Error('Sorry Data Not Found'), [])
        }
    }, 4000);
}


const callBack = (callback) => {
    const array = callback.map(element => element.toLowerCase())
    return console.log(array);
}

getMonth(callBack);