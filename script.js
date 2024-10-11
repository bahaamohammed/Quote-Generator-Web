const qoute = document.getElementById("qoute");
const author = document.getElementById("author");
const api_url = "https://dummyjson.com/quotes/";

async function getQoute(){
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    const response = await fetch(api_url + randomNumber);
    var data = await response.json();
    qoute.innerHTML = data.quote;
    author.innerHTML = data.author;
}
getQoute();