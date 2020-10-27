
const prosesData = ()=>{
    return new Promise((resolve, reject)=>{
        const statusSuccess = false
        setTimeout(()=>{
            if(statusSuccess){
                resolve("anda berhasil 1")
            }else{
                reject("anda gagal 1")
            }
        },3000)
    })
}

const prosesData2 = ()=>{
    return new Promise((resolve, reject)=>{
        const statusSuccess = true
        setTimeout(()=>{
            if(statusSuccess){
                resolve("anda berhasil 2")
            }else{
                reject("anda gagal 2")
            }
        },3000)
    })
}

const resultData = async() =>{
    try {
        const result = await prosesData()
        console.log(result);
        const result2 = await prosesData2()
        console.log(result2)
    } catch (error) {
        console.log(error)
    }
    finally{
        console.log('hello ini finally')
    }

}
resultData()