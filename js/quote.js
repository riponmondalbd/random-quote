url = 'https://api.kanye.rest/'
const loadQuote = () => {
    fetch(url)
        .then(res => res.json())
        .then(data => displayQuote(data))
}
const displayQuote = quote => {
    // console.log(quote);
    const blockQuote = document.getElementById('quotes');
    blockQuote.innerText = quote.quote;
}
loadQuote();