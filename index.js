require('es6-promise').polyfill();
require('isomorphic-fetch');

function getTopicCount(topic) {
    fetch(`https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&format=json&page=${topic}`).then(res => {
        return res.json();
    }).then(article => {
        let count = article.parse.text["*"].match(/pizza/g).length;
        console.log(count);
    })
}

getTopicCount("pizza");