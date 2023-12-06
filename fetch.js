// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
 
const url = `${BASE_URL}?q=cars&api-key=${API_KEY}`;
 
fetch(url)
  .then(function(data) {
    return data.json();
  })
  .then(function(responseJson) {
    // console.log(responseJson);
 
    let article = responseJson.response.docs[0];
    console.log(responseJson.response.docs.length);
    // console.log(article);
 
    const mainHeadline = article.headline.main;
    document.getElementById('article-title').innerText = mainHeadline;
    document.querySelector('#article-snippet').innerHTML = article.snippet;
    document.querySelector('#article-link').href = article.web_url;
 
    const author = article.byline.person;
 
    let articleAuthor = [];
    let i = 0;
    for (const personName in author) {
      i++;
      articleAuthor.push(`${author[personName].firstname} ${author[personName].lastname}`);
    }
 
    if(i < 2) {
      document.querySelector('#article-author-name').innerText = `Author is: ${articleAuthor}`;
    } else {
      document.querySelector('#article-author-name').innerText = `Authors are: ${articleAuthor.join(', ')}`;
    }
   
 
    if (article.multimedia.length > 0) {
      const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
      document.getElementById('article-img').src = imgUrl;
    }
  });

// https://youtu.be/8aGhZQkoFbQ?si=C0v-I_7yjsnRQ91m
