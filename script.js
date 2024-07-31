var currentQuote=document.getElementById("quote");
var currentAuthor=document.getElementById("author");
var btn = document.getElementById("new");




function getQuote(quoteArray){
    let rQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
   
    currentQuote.innerHTML = rQuote.quote;
    currentAuthor.innerHTML = "-"+rQuote.author;

}

async function getData() {
    const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    try {
      const response = await fetch(url, {
        headers: {
            accept: 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json.quotes.length);
      quotesData = json.quotes;
      getQuote(quotesData);
    } catch (error) {
      console.error(error.message);
    }
  }

//getData();

//getQuote();
document.addEventListener('DOMContentLoaded', getData);
btn.addEventListener('click', getData);