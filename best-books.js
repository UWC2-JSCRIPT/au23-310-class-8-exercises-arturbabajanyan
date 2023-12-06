const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
 
formEl.addEventListener('submit', function(e) {
  e.preventDefault();
  
  for (let i = 0; i < document.querySelectorAll('div p').length; i++) {
    document.querySelectorAll('div p')[i].innerText = '';
  }
 
  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;
  const backDate = `${year}-${month}-${date}`
  const currentDate = 'current';
  let dateInLink = '';
 
  // Fetch bestselling books for date and add top 5 to page


  if (year !== '' && month !== '' && date !== '') {
    dateInLink = backDate;
  } else {
    dateInLink = currentDate;
  }
 
  const url = `https://api.nytimes.com/svc/books/v3/lists/${dateInLink}/hardcover-fiction.json?api-key=${API_KEY}`;
 
  // console.log(url)
 
  fetch(url)
    .then(function(data) {
      return data.json();
    })
    .then(function(responseJson) {
      let bestBooks = responseJson.results.books;
      for (let x = 0; x < 5; x++) {
        document.getElementById(`img-src${x}`).setAttribute('src', bestBooks[x].book_image);
        document.getElementById(`img-src${x}`).setAttribute('alt', bestBooks[x].title);
        document.querySelector(`#book${x}`).innerText += `Title - ${bestBooks[x].title}\n`;
        document.querySelector(`#book${x}`).innerText += `Author - ${bestBooks[x].author}\n`;
        document.querySelector(`#book${x}`).innerText += `Description - ${bestBooks[x].description}\n`;
      }
    }) 
  });