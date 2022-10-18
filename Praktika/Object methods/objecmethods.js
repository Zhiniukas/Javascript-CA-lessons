const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const posts = await response.json();
const firstPost = posts[0];

console.log(firstPost);

//Kaip gauti objekto parametrų pavadinimus
const firstPostParams = Object.keys(firstPost);

console.log(firstPostParams);

//Parametro ir reikšmės deriniai
console.log(Object.entries(firstPost));

