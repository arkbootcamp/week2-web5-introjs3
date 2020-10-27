

const print = data =>{
    console.log(data);
    // tampilkan ke web user
}

const getData = (username, callback) =>{
    setTimeout(()=>{
        let name = 'Hello '+ username
        callback(name)
    },4000)
}
getData('muhammadrisano', print)