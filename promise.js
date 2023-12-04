const myPromise = new Promise(function(resolve, reject) {
  const num = Math.random();
  setTimeout(function() {
    if(num > 0.5) {
      resolve(num);
    } else {
      reject(num)
    }
  }, 1000);
})

myPromise.then(function(result) {
  console.log(`Success: ${result}`)
}).catch(function(result) {
  console.log(`Failure: ${result}`)
}).finally(function() {
  console.log('Complete');
})

