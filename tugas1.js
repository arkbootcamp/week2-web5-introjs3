const getData = (method, url, callback) =>{
    const ajax =  new XMLHttpRequest();
    ajax.open('GET', 'https://jsonplaceholder.typicode.com/posts')
    ajax.send();
    // ajax.onreadystatechange = function(){
    // }
    ajax.onreadystatechange = function(){
        const result = JSON.parse(ajax.responseText)
        callback(result)
    }
}
// getData(method, url, callback)

getData('GET', 'https://jsonplaceholder.typicode.com/posts', function(result){
    result.map((item)=>{
        console.log(item.title)
    })
})