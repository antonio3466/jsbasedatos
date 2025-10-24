console.log("aca llegue");

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then( data => {
    var texto = document.getElementById("miparrafo")
    texto.innerText = data;
    console.log(data[2].tittle)
    })
.catch((error) => console.log(error))