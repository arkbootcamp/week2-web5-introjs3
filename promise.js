const janji = new Promise((resolve, reject)=>{
    const statusSuccess = false
    setTimeout(()=>{
        if(statusSuccess){
            resolve("anda berhasil")
        }else{
            reject("anda gagal")
        }
    },3000)
})

const data = janji
data
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err);
})