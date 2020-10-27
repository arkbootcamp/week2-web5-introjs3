const getData = () =>{
    return new Promise((resolve, reject)=>{
        const ajax =  new XMLHttpRequest();
        ajax.open('GET', 'https://jsonplaceholder.typicode.com/posts')
        ajax.send();
        // ajax.onreadystatechange = function(){
        // }
        ajax.onreadystatechange = function(){
            if(ajax.status === 200){
                const result = JSON.parse(ajax.responseText)
                resolve(result)
            }else{
                reject(new Error('koneksi atau url salah'))
            }
        }
    })
}

const resultData = async()=>{
    const result = await getData()
    result.map((item)=>{
        console.log(item.title)
    })
    // console.log(result)
}
resultData()


// getData()
// console.log(getData());
// getData()
// .then((res)=>{
//     const result = res
//     result.map((item)=>{
//         console.log(item.title)
//     })
// })
// .catch((err)=>{
//     console.log(err.message)
// })